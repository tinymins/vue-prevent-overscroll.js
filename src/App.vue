<template>
  <div>
    <div>PreventOverscroll for Vue.js</div>
    <br>This area (body area) may contains a scroll which do not want to be affected by popup layer.
    <br>
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>1
    <br>2
    <br>3
    <br>4
    <br>5
    <br>6
    <br>7
    <br>8
    <br>9
    <br>0
    <br>End
    <div v-prevent-overscroll style="position: fixed; left: 0; right: 0; top: 0; bottom: 60px; background: #00000099; text-align: center; padding-top: 90px; color: pink;">
      Scroll in this area (popup layer) will never affect body scroll bar.
      <div style="margin: 30px; height: 60px; overflow-y: auto; background: #22ffff77; color: white;">
        There is a sub scroll area, it works fine.
        <br>There is a sub scroll area, it works fine.
        <br>There is a sub scroll area, it works fine.
        <br>There is a sub scroll area, it works fine.
        <br>There is a sub scroll area, it works fine.
        <br>There is a sub scroll area, it works fine.
        <br>There is a sub scroll area, it works fine.
      </div>
    </div>
    <div style="position: fixed; left: 0; right: 0; bottom: 0; height: 60px; background: #00000066; text-align: center;">
      Scroll in this area will affect body scroll bar.
    </div>
  </div>
</template>
