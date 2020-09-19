<template>
    <span @click="toggleState()" :class="state ? 'bg-gray-600' : 'bg-gray-200'" role="checkbox" tabindex="0" aria-checked="false" class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
        <span :class="state ? 'translate-x-5' : 'translate-x-0'" aria-hidden="true" class="translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200">
            <span :class="state ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'" class="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
                <svg v-show="!state" class="h-3 w-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
            <span :class="state ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'" class="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
                <svg v-show="state" class="h-3 w-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </span>
        </span>
    </span>
</template>

<script>
    export default {
        props: {
            state: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            toggleState() {
                this.state = !this.state;
                if(this.state){
                    document.body.classList.add('theme-dark');
                }else{
                    document.body.classList.remove('theme-dark');
                }
            }
        }
    }
</script>
