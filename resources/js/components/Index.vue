<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/create" class="btn btn-primary float-right">Tambah Buku</router-link>
        </div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Judul Buku</th>
                        <th scope="col">Deskripsi</th>
                        <th width="100"></th>
                        <th width="100"></th>
                        <th width="100"></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Laravel Mix with VueJs</td>
                        <td>Penjalasan Konsep laravel mix</td>
                        <td>
                            <button class="btn btn-info">Lihat</button>
                        </td>
                        <td>
                            <button class="btn btn-success">Edit</button>
                        </td>
                        <td>
                            <form action="">
                                <button class="btn btn-danger">Hapus</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

