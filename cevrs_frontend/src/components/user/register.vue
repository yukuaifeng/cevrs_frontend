<template>
  <div class="container">
    <section class="signin signup">
			<div class="container-fluid">
				<div class="row">

					<div class="col-sm-4">
						<div class="sign-bg" style="padding-top: 100px; height: 800px">
								<img src="/static/image/login.png">
						</div><!--/.sign-bg -->
					</div><!--/.col -->

					<div class="col-sm-8">
						<div class="single-sign">
							<div class="sign-content" style="padding-top: 100px; height: 800px;">
								<h2>注 册</h2>
								<div class="signin-form">
									<form action="signin.html">											
                                        <div class="form-group">
                                            <label for="signin_form">用户名</label>
                                            <input type="text" class="form-control" id="signin_form" placeholder="Shane">
                                        </div><!--/.form-group -->										
										<div class="form-group">
										    <label for="signin_form">邮 箱</label>
										    <input type="email" class="form-control" id="signin_form" placeholder="info@abc.com">
										</div><!--/.form-group -->
										<div class="form-group">
											<label for="signin_form">密 码</label>
										    <input type="password" class="form-control" id="signin_form" placeholder="Password">
										</div><!--/.form-group -->
										<div class="form-group">
											<label for="signin_form">再次输入密码</label>
										    <input type="password" class="form-control" id="signin_form" placeholder="Password">
										</div><!--/.form-group -->

									</form><!--/form -->
								</div><!--/.signin-form -->
								<div class="signin-footer">
									<button type="button" class="btn signin_btn" data-toggle="modal" data-target=".signin_modal">
										注 册
									</button>
									<p>
										已有账户？ <a href="signin.html">登录</a>
									</p>
								</div><!--/.signin-footer -->

							</div><!--/.sign-content -->

							<!-- modal part start -->
							<div class="modal fade signin_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
								<div class="modal-dialog modal-lg" role="document">
								    <div class="modal-content">
								      	<div class="sign-content">

								      		<div class="modal-header">
												<h2>sign in</h2>
											</div><!--/.modal-header -->
											
											<div class="modal-body">
												<div class="signin-form">
													<form action="signin.html">
														<div class="row">
															<div class="col-sm-6">
																<div class="form-group">
																    <label for="signin_form">first name</label>
																    <input type="text" class="form-control" id="signin_form" placeholder="Shane">
																</div><!--/.form-group -->
															</div><!--/.col -->
															<div class="col-sm-6">
																<div class="form-group xtra-margin-left">
																    <label for="signin_form">last name</label>
																    <input type="text" class="form-control" id="signin_form" placeholder="watson">
																</div><!--/.form-group -->
															</div><!--/.col -->
														</div><!--/.row -->
														<div class="form-group">
														    <label for="signin_form">Email</label>
														    <input type="email" class="form-control" id="signin_form" placeholder="info@abc.com">
														</div><!--/.form-group -->
														<div class="form-group">
															<label for="signin_form">password</label>
														    <input type="password" class="form-control" id="signin_form" placeholder="Password">
														</div><!--/.form-group -->

													</form><!--/form -->
												</div><!--/.signin-form -->
												<div class="signin-footer">
													<button type="button" class="btn signin_btn" data-toggle="modal" data-target=".signin_modal">
														sign up
													</button>
													<p>
														Already a Member ?
														<a href="signin.html">signin</a>
													</p>
												</div><!--/.signin-footer -->
											</div><!--/.modal-body -->

										</div><!--/.sign-content -->
								    </div><!--/.modal-content -->
								</div><!--/.modal-dialog -->

							</div><!--/.modal -->
							<!-- modal part end -->

						</div><!--/.single-sign -->
					</div><!--/.col -->
				</div><!--/.row-->
			</div><!--/.container -->
		</section><!--/.signin -->
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'

Vue.use(Field)
Vue.use(Button)
export default {
  data () {
    return {
      username: '18813007814',
      password: '123456',
      code: ''
    }
  },
  computed: {
    usernamemsg () {
      if (this.username === '') {
        return ''
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    }
  }
}
</script>