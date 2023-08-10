<template>
  <main>
    <h2>
      META BORA
      <em>Team service develop</em>
      <span>2019.11 ~ 현재</span>
    </h2>

    <section>
      <h3>Bora Portal <a href="https://www.boraportal.com/" target="_blank">https://www.boraportal.com</a></h3>
      <div class="thumb">
        <div class="img">
          <img :src="bora2" alt="">
        </div>
        <ul>
          <li>2023년 7월 리뉴얼 오픈</li>
          <li>지갑, 멀티 체인, 대체 불가능 토근(NFT) 등의 서비스를 제공하는 블록체인 플랫폼</li>
          <li>monorepo 구조로 earn, play, brand 3개의 프로젝트 진행</li>
          <li>Vue3(composition API), TypeScript, SCSS</li>
          <li>적응형</li>
        </ul>
      </div>
    </section>

    <section>
      <h3>Bora Scope <a href="https://scope.boraportal.com/" target="_blank">https://scope.boraportal.com/</a></h3>
      <div class="thumb">
        <div class="img">
          <img :src="borascope" alt="">
        </div>
        <ul>
          <li>토큰의 모든 거래의 이동을 모니터링하고 탐색하는 서비스</li>
          <li>Vue3, TypeScript, SCSS</li>
          <li>Only Desktop</li>
        </ul>
      </div>
    </section>

    <section>
      <h3>Todayis <a href="https://www.todayis.io/" target="_blank">https://www.todayis.io/</a></h3>
      <div class="thumb">
        <div class="img">
          <img :src="todayis" alt="">
        </div>
        <ul>
          <li>한정 된 시간을 NFT로 구매, 판매 할 수 있는 서비스 (Clip 지갑 사용)</li>
          <li>Vue2, SCSS</li>
          <li>Mobile Optimization</li>
        </ul>
      </div>
    </section>

    <section>
      <h3>CuteMyPet(beta)</h3>
      <div class="thumb">
        <div class="img">
          <img :src="cmp" alt="">
        </div>
        <ul>
          <li>반려동물의 사진을 NFT로 만들어 판매, 구매 가능한 서비스 (Kaikas 지갑 사용)</li>
          <li>Nuxt, SCSS</li>
          <li>Only Desktop</li>
        </ul>
      </div>
    </section>

    <section>
      <h3>Play2bit <a href="https://www.play2bit.com/" target="_blank">https://www.play2bit.com/</a></h3>
      <div class="thumb">
        <div class="img">
          <img :src="play2bit" alt="">
        </div>
        <ul>
          <li>글로벌 온라인 게임 서비스 플랫폼</li>
          <li>Nuxt, SCSS</li>
          <li>적응형</li>
        </ul>
      </div>
    </section>

    <section>
      <h3>그 외 프로젝트</h3>
      <div class="thumb">
        <ul>
          <li>Boraecosystem, Membership : boraportal 전신, 반응형</li>
          <li>Astelliaroyal : 코드내재화, 반응형</li>
          <li>KakaoVX, Promotion Template, Line POD 등</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bora2: require("@/assets/bora2.png"),
      borascope: require("@/assets/borascope.png"),
      todayis: require("@/assets/todayis.jpeg"),
      cmp: require("@/assets/cutemypet.png"),
      play2bit: require("@/assets/play2bit.png"),
    }
  }
};
</script>

<style lang="scss" scoped>
main {
}
</style>
