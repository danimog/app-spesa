<template>
    <div class="container">
        <!-- {{ res }} -->
        <table class="table table-responsive table-success table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Prodotto</th>
                    <th scope="col">Quantita</th>
                    <th scope="col">Note</th>
                    <th scope="col">Data Creazione</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="r in res.documents">
                    <td> {{ r.$id }} </td>
                    <td>{{ r.categoria }}</td>
                    <td>{{ r.prodotto }}</td>
                    <td>{{ r.quantita }}</td>
                    <td>{{ r.note }}</td>
                    <td>{{ r.$createdAt }}</td>
                </tr>
            </tbody>
        </table>
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