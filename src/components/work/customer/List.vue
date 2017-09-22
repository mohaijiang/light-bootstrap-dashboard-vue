<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="header">
              <h4 class="title">客户案例</h4>
              <p class="category"> <router-link :to="{ name: 'CustomerCaseModify', params: { id: '0' }}"><button class="btn btn-info btn-fill pull-right">新建客户案例</button></router-link></p>
            </div>
            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <thead>
                <th>案例名称</th>
                <th>状态</th>
                <th>更新时间</th>
                <th>操作</th>
                </thead>
                <tbody>
                <tr v-for="cs in data">
                  <td>{{cs.name}}</td>
                  <td>{{cs.state}}</td>
                  <td>{{cs.updateTime | formatDate}}</td>
                  <td>Niger</td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loading: true,
        data: [],
        errors: []
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = null
        this.loading = true
        this.$axios.get('/api/cases')
        .then(response => {
          response.data.forEach(n => {
            this.data.push(n)
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  }
</script>
