<template>
    <div>
        <LoadingSpinner class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-20 h-20"  />
    </div>
</template>
<script>
import LoadingSpinner from '@/components/LoadingSpinner.component.vue'

export default { 
    name: 'LoadingPage',
    components: {
        LoadingSpinner,
    }
}
</script>