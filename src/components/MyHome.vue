<template>
    <div>
{{ res }}
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import api from '../api'
import { Server } from '../utils/config'

export default {
    setup() {

        const res = ref({});

           
        onMounted(async () => {
            let data = await api.listDocuments(Server.collectionID);
                res.value = data;
        })

        return {
            res,
        }
    }
}
</script>

<style lang="scss" scoped></style>