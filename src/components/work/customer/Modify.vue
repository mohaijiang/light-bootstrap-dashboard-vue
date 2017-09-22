<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="header">
              <h4 class="title">新增客户案例</h4>
            </div>
            <div class="content">
              <form data-toggle="validator" role="form">
                <div class="row">
                  <div class="col-md-10">
                    <div class="form-group">
                      <label>案例名称</label>
                      <input type="text" class="form-control" placeholder="Company" v-model="customer.caseName" required>
                    </div>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-7">
                    <div class="form-group">
                      <label>解决方案</label>

                      <div class="row">
                        <div class="col-md-2" v-for="sol in customer.solution">
                          <div class="form-group">
                            <input
                              type="checkbox"
                              :value="sol.name"
                              v-model='sol.selected'
                            />
                            <label>{{sol.name}}</label>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <label>使用产品</label>

                      <div class="row">
                        <div class="col-md-2">
                          <div class="form-group">
                            <input type="checkbox"/>
                            <label>Newtouch X</label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="form-group">
                            <input type="checkbox"/>
                            <label>Newtouch One</label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="form-group">
                            <input type="checkbox"/>
                            <label>Newtouch Step</label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="form-group">
                            <input type="checkbox"/>
                            <label>Newtouch C</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10">
                    <div class="form-group">
                      <label>案例详情</label>
                      <textarea rows="5" class="form-control" placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <label>客户全称</label>
                      <input type="text" class="form-control" placeholder="City" value="Mike">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-10">
                    <div class="form-group">
                      <label>客户介绍</label>
                      <textarea rows="2" class="form-control" placeholder="请输入" value="Mike"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10">
                    <div class="form-group">
                      <label>官网连接</label>
                      <input type="text" class="form-control" placeholder="City" value="Mike">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-2 col-md-offset-4">
                    <button type="submit" class="btn btn-info btn-fill pull-right">保存</button>
                  </div>
                  <div class="col-md-2">
                    <router-link :to="{ name: 'CustomerCaseList'}"><button class="btn btn-info btn-fill pull-left">取消</button></router-link>
                  </div>
                </div>
                <div class="clearfix"></div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'CustomerCaseModify',
    data () {
      return {
        customer: {
          id: this.$route.params.id,
          caseName: '111',
          solution: [
            {
              name: '私有云',
              selected: true
            },
            {
              name: '混合云',
              selected: false
            },
            {
              name: '互联网金融',
              selected: false
            },
            {
              name: 'DevOps',
              selected: false
            },
            {
              name: '存储云',
              selected: false
            }
          ],
          product: [],
          caseContext: '',
          customerName: '',
          officialLink: ''
        }
      }
    }
  }

</script>
