<template>
    <div class="item">
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '@/components/itemContainer'

export default {
	name: 'item',
	components: {
		itemcontainer
	}
}
</script>
