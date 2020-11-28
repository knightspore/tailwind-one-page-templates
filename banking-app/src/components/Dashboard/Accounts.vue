<template>
<div>
    <!-- Title -->
    <div class="flex space-between items-center text-indigo-900">
    <div class="flex items-center gap-2 relative">
        <h2 class="text-xl font-bold">Overview</h2>
        <svg class="m-auto w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        <span class="abolute transform -translate-x-4 -translate-y-1 w-2 h-2 bg-red-500 rounded-full"/>
    </div>
    <div class="flex-1 text-right">
        <p class="text-sm font-semibold">Sept 13, 2020</p>
    </div>
    </div>

    <!--  Accounts -->
    <div class="mt-5 text-gray-900 grid gap-4">
    <div class="bg-white p-4 rounded-xl flex gap-4 items-center shadow-md">
        <!-- SVG -->
        <div class="bg-gray-300 w-11 h-10 rounded-lg flex"><svg class="m-auto w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></div>

        <!-- Text -->
        <div>
        <h3 class="font-bold text-sm">Sent</h3>
        <p class="text-xs font-semibold text-gray-400">Sending Payments to Clients</p>
        </div>

        <!-- Amount -->
        <div class="flex-1 text-right">
        <p class="font-bold text-xs">$150</p>
        </div>
    </div>

    <div class="bg-white p-4 rounded-xl flex gap-4 items-center shadow-md">
        <!-- SVG -->
        <div class="bg-gray-300 w-11 h-10 rounded-lg flex"><svg class="m-auto w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>

        <!-- Text -->
        <div>
        <h3 class="font-bold text-sm">Received</h3>
        <p class="text-xs font-semibold text-gray-400">Receiving Salary from company</p>
        </div>

        <!-- Amount -->
        <div class="flex-1 text-right">
        <p class="font-bold text-xs">$250</p>
        </div>
    </div>

    <div class="bg-white p-4 rounded-xl flex gap-4 items-center shadow-md">
        <!-- SVG -->
        <div class="bg-gray-300 w-11 h-10 rounded-lg flex"><svg class="m-auto w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>

        <!-- Text -->
        <div>
        <h3 class="font-bold text-sm">Loan</h3>
        <p class="text-xs font-semibold text-gray-400">Loan for the Car</p>
        </div>

        <!-- Amount -->
        <div class="flex-1 text-right">
        <p class="font-bold text-xs">$400</p>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {}
</script>