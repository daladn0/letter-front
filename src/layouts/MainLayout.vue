<template>
    <div>
        <LayoutHeader />
        <slot/>
    </div>
</template>

<script>
import LayoutHeader from '@/layouts/components/LayoutHeader.vue'
export default {
    name: 'MainLayout',
    components: {
        LayoutHeader
    }
}
</script>