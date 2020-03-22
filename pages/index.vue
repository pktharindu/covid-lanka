<template>
  <div>
    <section class="bg-indigo-100 pt-16 pb-40">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center mb-5">
          <Logo class="text-indigo-600 w-16 h-16" />
          <span
            class="font-semibold leading-6 ml-3 text-indigo-600 text-2xl tracking-wide"
          >
            COVID-19 Sri Lanka
          </span>
        </div>
        <div class="text-center">
          <h3
            class="mt-2 max-w-3xl text-3xl font-extrabold text-gray-800 sm:text-4xl mx-auto"
          >
            Coronavirus (COVID-19) Disease Pandemic Statistics in Sri Lanka
          </h3>
          <p class="leading-10 max-w-2xl mt-6 mx-auto text-gray-500 text-xl">
            Be
            <span class="font-semibold text-indigo-600 uppercase">ready</span>
            for coronavirus. Be
            <span class="font-semibold text-indigo-600 uppercase">safe</span>
            from coronavirus infection. Be
            <span class="font-semibold text-indigo-600 uppercase">SMART</span>
            & inform yourself about it. Be
            <span class="font-semibold text-indigo-600 uppercase">kind</span>
            & support one another.
          </p>

          <label
            for="local-toggle"
            class="content-center cursor-pointer inline-flex items-center mt-8"
          >
            <div class="font-medium leading-none mr-3 text-gray-700">
              Local
            </div>
            <div class="relative">
              <input
                id="local-toggle"
                v-model="isGlobal"
                type="checkbox"
                class="hidden"
              />
              <div class="w-16 h-6 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                :class="{ 'translate-x-full': isGlobal }"
                class="-translate-y-1 absolute bg-indigo-500 duration-300 ease-in-out h-8 inset-y-0 left-0 rounded-full shadow transform transition w-8"
              ></div>
            </div>
            <div class="font-medium leading-none ml-3 text-gray-700">
              Global
            </div>
          </label>
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
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-blue-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Ambulance class="w-3/5 text-blue-500" />
            </div>

            <span
              :aria-label="
                numberFormat(newCases) +
                  ' new coronavirus cases during 24-hour period'
              "
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-blue-600 transform"
            >
              <animated-number
                :value="newCases"
                :formatValue="numberFormat"
                :duration="duration"
              />
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              New Cases
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-purple-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Hospital class="w-3/5 text-purple-500" />
            </div>
            <span
              :aria-label="
                numberFormat(totalCases) + ' coronavirus cases in total'
              "
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-purple-600 transform"
            >
              <animated-number
                :value="totalCases"
                :formatValue="numberFormat"
                :duration="duration"
              />
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              Total Cases
            </span>
          </div>
          <div
            v-if="!isGlobal && !totalDeaths"
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-teal-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Patient class="w-3/5 text-teal-500" />
            </div>
            <span
              :aria-label="
                numberFormat(hospitalized) + ' individuals in hospitals'
              "
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-teal-600 transform"
            >
              <animated-number
                :value="hospitalized"
                :formatValue="numberFormat"
                :duration="duration"
              />
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              Hospitalized
            </span>
          </div>
          <div
            v-if="isGlobal || totalDeaths"
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-yellow-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Tombstone class="w-3/5 text-yellow-500" />
            </div>
            <span
              :aria-label="
                numberFormat(newDeaths) + ' new deaths during 24-hour period'
              "
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-yellow-600 transform"
            >
              <animated-number
                :value="newDeaths"
                :formatValue="numberFormat"
                :duration="duration"
              />
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              New Deaths
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-red-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Death class="w-3/5 text-red-500" />
            </div>
            <span
              :aria-label="numberFormat(totalDeaths) + ' deaths in total'"
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-red-600 transform"
            >
              <animated-number
                :value="totalDeaths"
                :formatValue="numberFormat"
                :duration="duration"
              />
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              Total Deaths
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-orange-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Chart class="w-3/5 text-orange-500" />
            </div>
            <span
              :aria-label="Math.ceil(fatalityRate) + ' in 100 might die'"
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-orange-600 transform"
            >
              <animated-number
                :value="fatalityRate"
                :formatValue="floatFormat"
                :duration="duration"
              />%
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              Fatality Rate
            </span>
          </div>
          <div
            class="bg-white flex flex-col flex-wrap justify-center py-8 lg:pt-0 px-6 rounded-lg shadow-lg"
          >
            <div
              class="lg:-translate-y-1/2 bg-green-100 border-2 border-white h-20 inline-flex items-center justify-center mx-auto rounded-full shadow transform w-20"
            >
              <Wellness class="w-3/5 text-green-500" />
            </div>
            <span
              :aria-label="
                numberFormat(recovered) + ' recovered and discharged'
              "
              data-balloon-length="medium"
              data-balloon-pos="up"
              class="mt-6 lg:mt-0 lg:-translate-y-4 font-extrabold text-3xl text-center text-green-600 transform"
            >
              <animated-number
                :value="recovered"
                :formatValue="numberFormat"
                :duration="duration"
              />
            </span>
            <span
              class="font-semibold lg:mt-0 mt-3 text-center text-gray-600 text-sm uppercase"
            >
              Recovered
            </span>
          </div>
        </div>
        <p class="text-center mt-6 text-gray-500 text-sm">
          Last Updated: {{ $moment(healthAPI.update_date_time).format('LLL') }}
        </p>
        <p class="text-center mt-4 text-gray-500 text-sm">
          * Since the Health Promotion Bureau is issuing verified data from
          reliable sources, this might take several minutes to be updated.
        </p>
      </div>
    </section>

    <section>
      <div class="lg:px-8 max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <label class="block">
            <span class="text-gray-700">Countries</span>
            <multiselect
              v-model="selectedCountries"
              :options="Object.keys(pomberAPI)"
              :multiple="true"
              :searchable="true"
              :show-labels="false"
              :allow-empty="false"
              :max="3"
              placeholder="Pick a value"
            ></multiselect>
          </label>
        </div>

        <client-only>
          <div
            v-for="selectedCountry in selectedCountries"
            :key="selectedCountry"
            class="mt-6"
          >
            <span class="text-gray-700 font-bold">{{ selectedCountry }}</span>
            <VueApexCharts
              :options="chartOptions(selectedCountry)"
              :series="dataset(selectedCountry)"
              :height="chartHeight"
            ></VueApexCharts>
          </div>
        </client-only>

        <!-- <div class="flex flex-wrap items-center justify-end mt-8">
          <label
            v-for="label in Object.keys(
              pomberAPI[selectedCountries[0]][0]
            ).filter((label) => label !== 'date')"
            class="inline-flex items-center mr-6 last:mr-0"
          >
            <input
              :value="label"
              :name="label"
              v-model="checkedLabel"
              type="checkbox"
              class="form-checkbox text-indigo-600 h-6 w-6"
            />
            <span class="capitalize leading-none ml-3 text-lg text-gray-600">
              {{ label }}
            </span>
          </label>
        </div> -->
      </div>
    </section>
    <!-- {{ datasets }} -->
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Ambulance from '@/components/icons/Ambulance'
import Hospital from '@/components/icons/Hospital'
import Patient from '@/components/icons/Patient'
import Tombstone from '@/components/icons/Tombstone'
import Death from '@/components/icons/Death'
import Chart from '@/components/icons/Chart'
import Wellness from '@/components/icons/Wellness'
import AnimatedNumber from 'animated-number-vue'

export default {
  components: {
    Logo,
    Ambulance,
    Hospital,
    Patient,
    Tombstone,
    Death,
    Chart,
    Wellness,
    AnimatedNumber
  },
  data() {
    return {
      loading: true,
      errored: false,
      isGlobal: false,
      duration: 1000,
      healthAPI: {},
      pomberAPI: {},
      selectedCountries: ['Sri Lanka'],
      chartHeight: 300
    }
  },
  computed: {
    newCases() {
      return this.isGlobal
        ? this.healthAPI.global_new_cases
        : this.healthAPI.local_new_cases
    },
    totalCases() {
      return this.isGlobal
        ? this.healthAPI.global_total_cases
        : this.healthAPI.local_total_cases
    },
    hospitalized() {
      return this.healthAPI.local_total_number_of_individuals_in_hospitals
    },
    newDeaths() {
      return this.isGlobal
        ? this.healthAPI.global_new_deaths
        : this.healthAPI.local_new_deaths
    },
    totalDeaths() {
      return this.isGlobal
        ? this.healthAPI.global_deaths
        : this.healthAPI.local_deaths
    },
    fatalityRate() {
      return (this.totalDeaths / this.totalCases) * 100
    },
    recovered() {
      return this.isGlobal
        ? this.healthAPI.global_recovered
        : this.healthAPI.local_recovered
    },
    checkedLabel() {
      return (
        Object.keys(this.pomberAPI[this.selectedCountries[0]][0]).filter(
          (label) => label !== 'date'
        ) ?? []
      )
    },
    datasets() {
      return this.pomberAPI[this.selectedCountries[0]]
    }
  },
  async asyncData({ $axios, query, error }) {
    const [healthRes, pomberRes] = await Promise.all([
      $axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical'),
      $axios.get('https://pomber.github.io/covid19/timeseries.json')
    ])
    return {
      healthAPI: healthRes.data.data,
      pomberAPI: pomberRes.data
    }
  },
  methods: {
    numberFormat(num) {
      return num
        .toFixed(0)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    floatFormat(num) {
      return parseFloat(num.toFixed(2))
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    dataset(country) {
      const result = []

      this.checkedLabel.forEach((label) => {
        result.push({
          name: this.capitalizeFirstLetter(label),
          data: this.pomberAPI[country].map((item) => item[label])
        })
      })

      return result
    },
    chartOptions(country) {
      return {
        chart: {
          type: 'line'
        },
        stroke: {
          dashArray: [0, 8, 5],
          curve: 'smooth'
        },
        xaxis: {
          categories: this.pomberAPI[country].map((item) =>
            this.$moment(item.date).format('MMM D')
          )
        }
      }
    }
  }
}
</script>

<style>
.multiselect__tags span,
.multiselect__option--highlight {
  @apply bg-indigo-600;
}
.multiselect__tag-icon:after {
  @apply text-indigo-100;
}
.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  @apply bg-indigo-500;
}
.multiselect__option {
  @apply text-sm;
}
.multiselect__option--selected.multiselect__option--highlight {
  @apply bg-red-400;
}
</style>
