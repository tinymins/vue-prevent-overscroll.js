/**
 * This file is part of vue-prevent-overscroll.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

const DIRECTIVE_NAME = 'prevent-overscroll';

const canScrollEl = ($el, up) => {
  const overflow = up
    ? Math.abs($el.scrollTop) > Number.EPSILON
    : $el.scrollHeight - $el.scrollTop - $el.clientHeight > Number.EPSILON;
  if (!overflow) {
    return false;
  }
  const styles = getComputedStyle($el);
  if (styles['overflow-y'] !== 'auto' && styles['overflow-y'] !== 'scroll') {
    return false;
  }
  return true;
};

const canScrollEls = ($child, $root, up) => {
  let $el = $child;
  while ($el) {
    if (canScrollEl($el, up)) {
      return true;
    }
    if ($el === $root) {
      break;
    }
    $el = $el.parentNode;
  }
  return false;
};

const preventEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.returnValue = false;
  return false;
};

const plugin = (Vue, { name = DIRECTIVE_NAME } = {}) => {
  const itemMap = new Map();

  const update = (el) => {
    if (itemMap.has(el)) {
      return;
    }
    const item = { touchesPos: {} };

    item.onMouseWheel = (e) => {
      if (canScrollEls(e.target, el, e.wheelDelta > 0)) {
        return void 0;
      }
      return preventEvent(e);
    };
    item.onTouchStart = (e) => {
      // record touch start pos
      Object.keys(e.changedTouches).forEach((i) => {
        const touch = e.changedTouches[i];
        item.touchesPos[touch.identifier] = {
          startY: touch.clientY,
          currentY: touch.clientY,
        };
      });
      item.moving = false;
      item.canScroll = false;
    };
    item.onTouchMove = (e) => {
      // update current touch pos and calc touches sum delta distance
      let touchDeltaY = 0;
      Object.keys(e.changedTouches).forEach((i) => {
        const touch = e.changedTouches[i];
        const cache = item.touchesPos[touch.identifier];
        if (cache) {
          touchDeltaY += touch.clientY - cache.currentY;
          cache.currentY = touch.clientY;
        }
      });
      const canScroll = canScrollEls(e.target, el, touchDeltaY > 0);
      if (!item.moving) { // if first move cannot scroll this layer, all move after will not scroll this layer
        item.moving = true;
        item.canScroll = canScroll;
      }
      if (canScroll && item.canScroll) {
        return void 0;
      }
      return preventEvent(e);
    };
    item.onTouchEnd = (e) => {
      if (e && e.touches && e.touches.length !== 0) {
        return;
      }
      item.touchesPos = {};
    };
    el.addEventListener('touchstart', item.onTouchStart, { capture: true, passive: false, once: false });
    el.addEventListener('touchmove', item.onTouchMove, { capture: true, passive: false, once: false });
    el.addEventListener('touchend', item.onTouchEnd, { capture: true, passive: false, once: false });
    el.addEventListener('mousewheel', item.onMouseWheel, { capture: true, passive: false, once: false });
    itemMap.set(el, item);
  };

  const remove = (el) => {
    if (!itemMap.has(el)) {
      return;
    }
    const item = itemMap.get(el);
    el.removeEventListener('touchstart', item.onTouchStart);
    el.removeEventListener('touchmove', item.onTouchMove);
    el.removeEventListener('touchend', item.onTouchEnd);
    el.removeEventListener('mousewheel', item.onMouseWheel);
    itemMap.delete(el);
  };

  const directive = {
    inserted: (el, binding) => update(el, binding),
    update: (el, binding) => update(el, binding),
    unbind: el => remove(el),
  };
  Vue.directive(name, directive);
};

plugin.version = '2.0.1';

export default plugin;
