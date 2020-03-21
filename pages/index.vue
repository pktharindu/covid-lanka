<template>
  <div>
    <section class="bg-gray-200 pt-16 pb-32">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center mb-5">
          <Logo class="text-indigo-600 w-12 h-12" />
          <span
            class="font-semibold leading-6 ml-3 text-indigo-600 text-xl tracking-wide uppercase"
          >
            COVID-19
          </span>
        </div>
        <div class="text-center">
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Stats for Sri Lanka
          </h3>
          <span
            class="bg-indigo-500 font-bold font-mono inline-block mt-5 px-2 py-1 rounded-full text-white text-xs tracking-wider"
          >
            Mar 20, 2020 10:43 PM
          </span>
          <p class="mt-6 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            This might take several minutes to be updated, since Health
            Promotion Bureau is issuing verified data from reliable sources.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="-translate-y-12 lg:px-8 max-w-6xl mx-auto px-4 sm:px-6 transform"
      >
        <div
          class="bg-gray-200 gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          <div
            class="bg-white flex flex-col flex-wrap justify-center pb-8 px-6 rounded-lg shadow-lg"
          >
            <div
              class="-translate-y-1/2 bg-blue-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Ambulance class="w-3/5 text-blue-500" />
            </div>

            <span
              class="-translate-y-4 font-extrabold text-4xl text-center text-blue-600 transform"
            >
              {{ numberFormat(healthAPI.local_new_cases) }}
            </span>
            <span
              class="font-semibold text-center text-gray-600 text-sm uppercase"
            >
              New Cases
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center pb-8 px-6 rounded-lg shadow-lg"
          >
            <div
              class="-translate-y-1/2 bg-purple-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Hospital class="w-3/5 text-purple-500" />
            </div>
            <span
              class="-translate-y-4 font-extrabold text-4xl text-center text-purple-600 transform"
            >
              {{ numberFormat(healthAPI.local_total_cases) }}
            </span>
            <span
              class="font-semibold text-center text-gray-600 text-sm uppercase"
            >
              Total Cases
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center pb-8 px-6 rounded-lg shadow-lg"
          >
            <div
              class="-translate-y-1/2 bg-teal-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Patient class="w-3/5 text-teal-500" />
            </div>
            <span
              class="-translate-y-4 font-extrabold text-4xl text-center text-teal-600 transform"
            >
              {{
                numberFormat(
                  healthAPI.local_total_number_of_individuals_in_hospitals
                )
              }}
            </span>
            <span
              class="font-semibold text-center text-gray-600 text-sm uppercase"
            >
              Hospitalizations
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center pb-8 px-6 rounded-lg shadow-lg"
          >
            <div
              class="-translate-y-1/2 bg-red-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Death class="w-3/5 text-red-500" />
            </div>
            <span
              class="-translate-y-4 font-extrabold text-4xl text-center text-red-600 transform"
            >
              {{ numberFormat(healthAPI.local_deaths) }}
            </span>
            <span
              class="font-semibold text-center text-gray-600 text-sm uppercase"
            >
              Deaths
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center pb-8 px-6 rounded-lg shadow-lg"
          >
            <div
              class="-translate-y-1/2 bg-orange-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Chart class="w-3/5 text-orange-500" />
            </div>
            <span
              class="-translate-y-4 font-extrabold text-4xl text-center text-orange-600 transform"
            >
              {{
                parseFloat(
                  (
                    (healthAPI.local_deaths / healthAPI.local_total_cases) *
                    100
                  ).toFixed(2)
                )
              }}%
            </span>
            <span
              class="font-semibold text-center text-gray-600 text-sm uppercase"
            >
              Fatality Rate
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center pb-8 px-6 rounded-lg shadow-lg"
          >
            <div
              class="-translate-y-1/2 bg-green-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Wellness class="w-3/5 text-green-500" />
            </div>
            <span
              class="-translate-y-4 font-extrabold text-4xl text-center text-green-600 transform"
            >
              {{ numberFormat(healthAPI.local_recovered) }}
            </span>
            <span
              class="font-semibold text-center text-gray-600 text-sm uppercase"
            >
              Recovered
            </span>
          </div>
        </div>
      </div>
      <p
        class="-translate-y-12 leading-7 mt-6 text-center text-gray-500 text-sm transform"
      >
        * Since Health Promotion Bureau is issuing verified data from reliable
        sources, this might take several minutes to be updated.
      </p>

      {{ healthAPI }}
    </section>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import Ambulance from '../components/icons/Ambulance'
import Hospital from '../components/icons/Hospital'
import Patient from '../components/icons/Patient'
import Death from '../components/icons/Death'
import Chart from '../components/icons/Chart'
import Wellness from '../components/icons/Wellness'
export default {
  components: {
    Logo,
    Ambulance,
    Hospital,
    Patient,
    Death,
    Chart,
    Wellness
  },
  data() {
    return {
      healthAPI: {}
    }
  },
  asyncData({ $axios }) {
    return $axios
      .get('https://www.hpb.health.gov.lk/api/get-current-statistical')
      .then((res) => {
        return { healthAPI: res.data.data }
      })
  },
  methods: {
    numberFormat(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>
