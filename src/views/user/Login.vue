<template>
    <div class="container">
        <h2>欢迎登录后台管理系统！</h2>
        <a-form class="login-form">
            <a-form-item>
                <a-input placeholder="请输入用户名">
                    <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input type="password" placeholder="请输入密码">
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color: rgba(0,0,0,.25)"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox>记住密码</a-checkbox>
                <a-button type="primary" class="login-form-button" @click="$router.push('/provider/index')">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.container{
    padding: 144px 0 114px 0;
    background-color: #f0f2f5;
    h2{
        text-align: center;
        font-size: 32px;
        font-weight: 500;
    }
    .login-form{
        max-width: 300px;
        margin: auto;
        margin-top: 50px;
        .login-form-button{
            width: 100%;
        }
    }
}
</style>
