<template>
    <div class="container">
        		<!-- signin end -->
		<section class="signin">
			<div class="container-fluid">
				<div class="row">

					<div class="col-sm-4">
						<div class="single-sign">
							<div class="sign-bg" style="padding-top: 100px;height: 800px;">
								<img src="/static/image/login.png">
							</div><!--/.sign-bg -->
						</div><!--/.single-sign -->
					</div><!--/.col -->

					<div class="col-sm-8">
						<div class="single-sign">
							<div class="sign-content" style="padding-top: 100px;height: 800px;">
								<h2>登 录</h2>

								<div class="signin-form">
									<div class=" ">
										<div class=" ">
											<form action="signin.html">
												<div class="form-group">
												    <label for="signin_form">用户名</label>
												    <input type="email" class="form-control" id="signin_form" placeholder="info@abc.com">
												</div><!--/.form-group -->
												<div class="form-group">
													<label for="signin_form">密 码</label>
												    <input type="password" class="form-control" id="signin_form" placeholder="Password">
												</div><!--/.form-group -->
											</form><!--/form -->
										</div><!--/.col -->
									</div><!--/.row -->

								</div><!--/.signin-form -->

								<div class="signin-footer">
									<button type="button" class="btn signin_btn" data-toggle="modal" data-target=".signin_modal">
									登 录
									</button>
									<p>
										没有账户 ?
										 <a href="signup.html">注 册</a>
									</p>
								</div><!--/.signin-footer -->

							</div><!--/.sign-content -->

						</div><!--/.single-sign -->
					</div><!--/.col -->
				</div><!--/.row-->
			</div><!--/.container -->
		</section><!--/.signin -->
		
		<!-- signin end -->

		<!--footer copyright start -->
		<footer class="footer-copyright">
			<div id="scroll-Top">
				<i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
			</div><!--/.scroll-Top-->

		</footer><!--/.hm-footer-copyright-->
		<!--footer copyright  end -->
    </div>
</template>
<script>
import Vue from 'vue'
import { Field,Button,Toast,Divider} from 'vant'
import axios from 'axios'
// import { setInterval, clearInterval } from 'timers';
// import func from '../../../vue-temp/vue-editor-bridge';
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Divider)

export default {
    data () {
        return {
            tel:'',
            password:'',
            zhud:false,
            loading:false
        }
    },
    computed: {
        usertel () {
            if (this.tel === ""){
                return ''
            }else if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)){
                return '手机号格式错误'
            }else {
                return ''
            }
        },
        pass () {
            if (this.password === ""){
                return ''
            }else if(this.password.length<6){
                return '密码不可小于6位'
            }else {
                return ''
            }
        }
    },
    methods: {
        toRegister () {
            this.$router.replace('/register')
        },
        login () {
            if (this.tel === '' || this.usertel === '手机号码格式错误') {
                Toast('手机号码输入有误')
                return
            }
            if (this.password === '' || this.pass === '密码格式错误，最少为6位') {
                Toast('密码输入有误')
                return
            }
            if (this.sms === '' || this.sms !== this.adminCode) {
                Toast('验证码输入有误')
                return
            }
            this.reallR()
        },
        reallR () {
            this.zhud=true
            this.loading=true
            axios.post('https://www.daxunxun.com/users/login', {
            username: this.tel,
            password: this.password
        }).then(res=>{
            this.zhud=false
            this.loading=false
            if (res.data === 2) {
                Toast('用户未注册')
            } else if(res.data === -1){
                Toast('密码错误')
            }else if (res.data === 0) {
                Toast('登录失败')
            } else {
            Toast('登录成功')
            localStorage.setItem('isLogin','ok') //登录标识
            this.$router.back()  //登陆成功返回上一页
            }
        })
        }
    }
}
</script>
