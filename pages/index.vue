<template>
  <div>
    <section class="bg-gray-200 pt-16 pb-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p
            class="text-xl leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            COVID-19
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Stats for Sri Lanka
          </h3>
          <span
            class="bg-indigo-500 font-bold font-mono inline-block mt-3 px-2 py-1 rounded-full text-white text-xs tracking-wider"
          >
            Mar 20, 2020 10:43 PM
          </span>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
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
          class="bg-gray-200 gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-hidden rounded-lg shadow-lg"
        >
          <div class="bg-white flex flex-col flex-wrap justify-center p-8">
            <div class="bg-gray-100 h-16 mx-auto p-2 rounded-full w-16">
              <Ambulance />
            </div>
            <span class="font-extrabold text-4xl text-center text-indigo-600"
              >11</span
            >
          </div>
          <div class="bg-white flex flex-col flex-wrap justify-center p-8">
            <div class="bg-gray-100 h-16 p-1 rounded-full w-16 w-full">
              <Hospital class="" />
            </div>
            <span class="font-extrabold text-4xl text-center text-indigo-600"
              >70</span
            >
          </div>
          <div class="bg-white flex flex-col flex-wrap justify-center p-8">
            <div class="bg-gray-100 h-16 p-1 rounded-full w-16 w-full">
              <Patient class="" />
            </div>
            <span class="font-extrabold text-4xl text-center text-indigo-600"
              >241</span
            >
          </div>
          <div class="bg-white flex flex-col flex-wrap justify-center p-8">
            <div class="bg-gray-100 h-16 p-1 rounded-full w-16 w-full">
              <Death class="" />
            </div>
            <span class="font-extrabold text-4xl text-center text-indigo-600"
              >0</span
            >
          </div>
          <div class="bg-white flex flex-col flex-wrap justify-center p-8">
            <div class="bg-gray-100 h-16 p-1 rounded-full w-16 w-full">
              <Chart class="" />
            </div>
            <span class="font-extrabold text-4xl text-center text-indigo-600"
              >1%</span
            >
          </div>
          <div class="bg-white flex flex-col flex-wrap justify-center p-8">
            <div class="bg-gray-100 h-16 p-1 rounded-full w-16 w-full">
              <Wellness class="" />
            </div>
            <span class="font-extrabold text-4xl text-center text-indigo-600"
              >1</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Ambulance from '../components/icons/Ambulance'
import Hospital from '../components/icons/Hospital'
import Patient from '../components/icons/Patient'
import Death from '../components/icons/Death'
import Chart from '../components/icons/Chart'
import Wellness from '../components/icons/Wellness'
export default {
  components: {
    Ambulance,
    Hospital,
    Patient,
    Death,
    Chart,
    Wellness
  }
}
</script>

<style>
svg {
  /* filter: grayscale(100%); */
}
</style>
