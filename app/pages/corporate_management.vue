<script>
import AppFooter from '~/components/shared/Footer.vue'
import GetStarted from '~/components/shared/GetStarted.vue'
import PageHeader from '~/components/shared/PageHeader.vue'
import SupportCard from '~/components/shared/SupportCard.vue'
import TeamCard from '~/components/shared/TeamCard.vue'
import TeamSmallCard from '~/components/shared/TeamSmallCard.vue'
import TryBizoklay from '~/components/shared/TryBizoklay.vue'

export default {
  components: {
    AppFooter,
    GetStarted,
    PageHeader,
    SupportCard,
    TeamCard,
    TeamSmallCard,
    TryBizoklay,
  },
  data() {
    return {
      teamList: [
        {
          name: 'Name',
          role: 'CEO & Co-Founder',
          bio: '[Brief background: technical expertise, previous companies, vision for product development]. This section can comfortably hold 2-3 paragraphs of text. Ideal for highlighting specific technical achievements or past exit experiences.',
          image: '/images/team-1.png',
          nameLocationOrder: 0,
          icon: 'fa-brands:linkedin',
        },
        {
          name: 'Name',
          role: 'CEO & Co-Founder',
          bio: '[Brief background: technical expertise, previous companies, vision for product development]. This section can comfortably hold 2-3 paragraphs of text. Ideal for highlighting specific technical achievements or past exit experiences.',
          image: '/images/team-1.png',
          nameLocationOrder: 1,
          icon: 'fa-brands:linkedin',
        },
        {
          name: 'Name',
          role: 'CEO & Co-Founder',
          bio: '[Brief background: technical expertise, previous companies, vision for product development]. This section can comfortably hold 2-3 paragraphs of text. Ideal for highlighting specific technical achievements or past exit experiences.',
          image: '/images/team-1.png',
          nameLocationOrder: 0,
          icon: 'fa-brands:linkedin',
        },
        {
          name: 'Name',
          role: 'CEO & Co-Founder',
          bio: '[Brief background: technical expertise, previous companies, vision for product development]. This section can comfortably hold 2-3 paragraphs of text. Ideal for highlighting specific technical achievements or past exit experiences.',
          image: '/images/team-1.png',
          nameLocationOrder: 1,
          icon: 'fa-brands:linkedin',
        },
        {
          name: 'Name',
          role: 'CEO & Co-Founder',
          bio: '[Brief background: technical expertise, previous companies, vision for product development]. This section can comfortably hold 2-3 paragraphs of text. Ideal for highlighting specific technical achievements or past exit experiences.',
          image: '/images/team-1.png',
          nameLocationOrder: 0,
          icon: 'fa-brands:linkedin',
        },
      ],
      boardLeftList: [
        {
          name: 'Advisor Name',
          bio: '[Background in payments industry, banking, technology, and Turkish financial markets]',
          image: '/images/1.jpg',
        },
        {
          name: 'Advisor Name',
          bio: '[Background in payments industry, banking, technology, and Turkish financial markets]',
          image: '/images/2.jpg',
        },
      ],
      boardRightList: [
        {
          name: 'Advisor Name',
          bio: '[Background in payments industry, banking, technology, and Turkish financial markets]',
          image: '/images/3.jpg',
        },
        {
          name: 'Advisor Name',
          bio: '[Background in payments industry, banking, technology, and Turkish financial markets]',
          image: '/images/2.jpg',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <section class="page-header">
      <PageHeader
        :variant="'Corporate Management'"
        :title="'Leadership Team Driving Innovation in Turkish Fintech'"
        :description="'Finture,s success is built on the expertise, vision, and dedication of our leadership team—combining deep financial services experience with cutting-edge technology capabilities.'"
        :category="'Corporate Management'"
        :blog-info="''"
        :search-placeholder="''"
      />
    </section>

    <section class="executive-team">
      <h2 class="text-center mb-6">Executive Team</h2>

      <div v-for="(T, index) in teamList" :key="index">
        <TeamCard
          :name="T.name"
          :role="T.role"
          :bio="T.bio"
          :image="T.image"
          :name-location-order="T.nameLocationOrder"
          :icon="T.icon"
        />
      </div>
    </section>

    <section class="board">
      <u-row cols="12" class="board-row">
        <u-col cols="12" md="5">
          <h4 class="mb-2">Board of Directors</h4>

          <div v-for="(l, index) in boardLeftList" :key="index">
            <TeamSmallCard :name="l.name" :bio="l.bio" :image="l.image" />
          </div>
        </u-col>
        <u-col cols="12" md="5">
          <h4 class="mb-2">Advisory Board</h4>

          <div v-for="(r, index) in boardRightList" :key="index">
            <TeamSmallCard :name="r.name" :bio="r.bio" :image="r.image" />
          </div>
        </u-col>
      </u-row>
    </section>

    <section class="try-bizoklay">
      <TryBizoklay />
    </section>

    <section class="footer">
      <GetStarted />
      <AppFooter />
    </section>
  </div>
</template>

<style scoped>
.executive-team {
  justify-content: center;
  padding-bottom: 70px;
}
.executive-team h2 {
  padding: 70px;
}

.board {
  justify-content: center;
  background: #f5f7f9;
  padding-top: 96px;
  padding-bottom: 96px;
}

.board-row {
  justify-content: center;
  margin: auto;
  width: 80%;
}
.board-col {
  margin: 20px;
  border-radius: 20px;
  background: #ffffff;
}
.try-bizoklay {
  justify-content: center;
  margin: auto;
  padding-top: 96px;
  padding-bottom: 70px;
  width: 70%;
}
</style>
