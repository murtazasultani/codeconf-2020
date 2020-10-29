<template>
    <input class="form-input rounded-md shadow-sm dark:text-gray-300 dark:bg-gray-700 dark:border-gray-800" :value="value" @input="$emit('input', $event.target.value)" ref="input">
</template>

<script>
    export default {
        props: ['value'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        }
    }
</script>

