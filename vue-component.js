Vue.component('cardseries', {
    props: ['serie'],
    template: `
    <div class="card text-white border-primary">
        <div class="card-body">
            <h3 class="card-title">{{serie.ville}}</h3>
            <p class="card-text">Position : {{serie.map_refs}}</p>
            <p class="card-text">Distance : {{serie.dist}}</p>
            <a v-bind:href="'photos.html?serie='+serie.id" class="btn btn-primary">Afficher les détails de cette série</a>
        </div>
    </div>
    `
})

Vue.component('cardphotos', {
    props: ['photo'],
    template: `
    <tr>
        <th>
            <img class="card-img-top" style="max-height:100px" :src="photo.url" alt="Card image cap">
        </th>
        <td>{{photo.description}}</td>
        <td>{{photo.position}}</td>
    </tr>
    `
})

