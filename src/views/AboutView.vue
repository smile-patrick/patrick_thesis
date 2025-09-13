<template>
<<<<<<< HEAD
  <div class="about-page">
    <h1>请我喝杯咖啡吧</h1>
    <p class="description">
      如果你觉得这个工具对你有帮助的话，也可以通过以下渠道进行请我喝杯咖啡 ☕️
    </p>

    <div class="section">
      <h2>友情链接</h2>
      <div class="friend-links">
        <a href="https://matrix.tencent.com/ai-detect/" target="_blank" rel="noopener noreferrer" class="link-card">
          <div class="link-icon">
            <i class="el-icon-search"></i>
          </div>
          <div class="link-info">
            <h3>朱雀AI检测</h3>
            <p>腾讯朱雀AI文本检测工具，可有效识别AI生成内容</p>
          </div>
        </a>

        <a href="https://www.paperpass.com/" target="_blank" rel="noopener noreferrer" class="link-card">
          <div class="link-icon">
            <i class="el-icon-document-checked"></i>
          </div>
          <div class="link-info">
            <h3>PaperPass</h3>
            <p>专业的论文查重和智能降重工具，助力学术诚信</p>
          </div>
        </a>

        <a href="https://vgms.fanyu.com/" target="_blank" rel="noopener noreferrer" class="link-card">
          <div class="link-icon">
            <i class="el-icon-document"></i>
          </div>
          <div class="link-info">
            <h3>维普论文管理系统</h3>
            <p>集论文检测、教师审阅统一管理的一体综合平台</p>
          </div>
        </a>

        <a href="https://www.cnki.net/" target="_blank" rel="noopener noreferrer" class="link-card">
          <div class="link-icon">
            <i class="el-icon-collection"></i>
          </div>
          <div class="link-info">
            <h3>知网</h3>
            <p>知识基础设施工程，提供海量学术资源与论文查询服务</p>
=======
  <div class="about-container">
    <!-- 欢迎区域 -->
    <div class="welcome-section">
      <div class="logo-container">
        <div class="logo-animation">
          <img alt="AI工具" src="../assets/logo.png" class="logo">
        </div>
        <h1 class="title gradient-text">关于我们</h1>
      </div>
      <p class="description">
        如果你觉得这个工具对你有帮助的话，也可以通过以下渠道支持我们
      </p>
    </div>

    <!-- 友情链接板块 -->
    <div class="section">
      <h2 class="section-title">友情链接</h2>
      <div class="friend-links">
        <a 
          :href="link.url" 
          class="link-card" 
          target="_blank" 
          rel="noopener noreferrer" 
          v-for="(link, index) in friendLinks" 
          :key="index"
        >
          <div class="icon-circle">
            <i :class="link.icon"></i>
          </div>
          <div class="link-info">
            <h3>{{ link.title }}</h3>
            <p>{{ link.description }}</p>
>>>>>>> 30d2114 (000)
          </div>
        </a>
      </div>
    </div>

<<<<<<< HEAD
    <div class="section payment-section">
      <h2>赞助支持</h2>
      <div class="payment-options">
        <div class="payment-card">
          <div class="payment-header">
            <i class="el-icon-chat-dot-round"></i>
            <h3>微信支付</h3>
          </div>
          <div class="qr-container">
            <img src="https://blogimgoss.oss-cn-nanjing.aliyuncs.com/img/83e6795093ef904e2a08c4a7d6c60030.jpg"
              alt="微信收款码" class="qr-code">
          </div>
        </div>

        <div class="payment-card">
          <div class="payment-header">
            <i class="el-icon-wallet"></i>
            <h3>支付宝</h3>
          </div>
          <div class="qr-container">
            <img src="https://blogimgoss.oss-cn-nanjing.aliyuncs.com/img/0a3b0d7a7d3b8d2e649357468e0b7561.jpg"
              alt="支付宝收款码" class="qr-code">
          </div>
        </div>
      </div>
    </div>



    <div class="section">
      <h2>我们的服务</h2>
      <ul class="service-list">
        <li><i class="el-icon-edit"></i> 文本润色与优化</li>
        <li><i class="el-icon-reading"></i> 提高文章可读性</li>
        <li><i class="el-icon-scissors"></i> 精简冗余内容</li>
        <li><i class="el-icon-collection-tag"></i> 增强专业表达</li>
      </ul>
=======
    <!-- 赞助与支持板块 -->
    <div class="section">
      <h2 class="section-title">赞助与支持</h2>
      <div class="payment-options">
        <!-- 微信支付 -->
        <div class="payment-card" @click="showWechatQr = true">
          <div class="icon-circle">
            <i class="icon-wechat"></i>
          </div>
          <h3>微信赞助[推荐]</h3>
          <p class="payment-desc">点击我，给我冲个月卡</p>
          <button class="primary-button action-button">
            <i class="icon-qrcode"></i> 扫码赞助
          </button>
        </div>
        
        <!-- 爱发电 -->
        <div class="payment-card" @click="openExternalLink('https://afdian.com/a/wintool')">
          <div class="icon-circle">
            <i class="icon-heart"></i>
          </div>
          <h3>爱发电</h3>
          <p class="payment-desc">点击我，给我充个648</p>
          <button class="primary-button action-button">
            <i class="icon-arrow-right"></i> 前往赞助
          </button>
        </div>
      </div>
    </div>

    <!-- 开发与设计板块 -->
    <div class="section">
      <h2 class="section-title">开发与设计</h2>
      <div class="friend-links">
        <a 
          :href="link.url" 
          class="link-card" 
          target="_blank" 
          rel="noopener noreferrer" 
          v-for="(link, index) in devDesignLinks" 
          :key="index"
        >
          <div class="icon-circle">
            <i :class="`${link.icon} dev-design-icon`"></i>
          </div>
          <div class="link-info">
            <h3>{{ link.title }}</h3>
            <p>{{ link.description }}</p>
          </div>
        </a>
      </div>
    </div>

    <!-- 我们的优势板块 -->
    <div class="section">
      <h2 class="section-title">我们的优势</h2>
      <div class="friend-links">
        <div class="style-card">
          <div class="icon-circle">
            <i class="icon-edit-outline"></i>
          </div>
          <div class="link-info">
            <h3>文本润色与优化</h3>
          </div>
        </div>
        <div class="style-card">
          <div class="icon-circle">
            <i class="icon-eye"></i>
          </div>
          <div class="link-info">
            <h3>提高文章可读性</h3>
          </div>
        </div>
        <div class="style-card">
          <div class="icon-circle">
            <i class="icon-delete"></i>
          </div>
          <div class="link-info">
            <h3>精简冗余内容</h3>
          </div>
        </div>
        <div class="style-card">
          <div class="icon-circle">
            <i class="icon-suitcase"></i>
          </div>
          <div class="link-info">
            <h3>增强专业表达</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- 微信支付弹窗 -->
    <div class="modal-overlay" v-if="showWechatQr" @click="showWechatQr = false">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">欢迎微信投喂</h3>
          <button class="modal-close" @click="showWechatQr = false">×</button>
        </div>
        <div class="modal-body">
          <div class="qr-container">
            <img 
              :src="wechatQrCode" 
              alt="微信支付二维码" 
              class="qr-code"
              @error="handleQrCodeError"
            />
            <div class="qr-placeholder" v-if="qrCodeError">
              <i class="icon-warning"></i>
              <p>二维码加载失败</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="default-button" @click="showWechatQr = false">关闭</button>
        </div>
      </div>
    </div>

    <!-- 联系区域 -->
    <div class="contact-section">
      <p>©AI文章优化工具  <a href=""><i class="el-icon-message"></i> thesis.pblog.fun</a></p>
>>>>>>> 30d2114 (000)
    </div>
  </div>
</template>

<<<<<<< HEAD
<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
}

h1 {
  color: #409EFF;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

h2 {
  color: #1d2025;
  margin: 20px 0 15px;
  font-size: 1.5rem;
  border-left: 4px solid #409EFF;
  padding-left: 15px;
}

.description {
  text-align: center;
  color: #707b91;
  max-width: 700px;
  font-size: 1.2rem;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.section {
  margin-bottom: 40px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.payment-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.payment-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
}

.payment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.payment-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.payment-header i {
  font-size: 1.8rem;
  color: #409EFF;
  margin-right: 10px;
}

.payment-header h3 {
  margin: 0;
  color: #303133;
  font-size: 1.2rem;
}

.qr-container {
  width: 100%;
  display: flex;
  justify-content: center;
=======
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      showWechatQr: false,
      qrCodeError: false,
      wechatQrCode: require('@/assets/wechat-qr.jpg'),
      friendLinks: [
        {
          title: '朱雀AI检测',
          icon: 'icon-search',
          description: '腾讯朱雀AI文本检测工具，可有效识别AI生成内容',
          url: 'https://matrix.tencent.com/ai-detect/'
        },
        {
          title: 'PaperPass',
          icon: 'icon-document',
          description: '专业的论文查重和智能降重工具，助力学术诚信',
          url: 'https://www.paperpass.com/'
        },
        {
          title: '维普论文管理系统',
          icon: 'icon-folder-opened',
          description: '集论文检测、教师审阅统一管理的一体综合平台',
          url: 'https://vgms.fanyu.com/'
        },
        {
          title: '知网',
          icon: 'icon-book-read',
          description: '知识基础设施工程，提供海量学术资源与论文查询服务',
          url: 'https://www.cnki.net/'
        }
      ],
      // 开发与设计板块独立数据
      devDesignLinks: [
        {
          title: 'smile_小沐',
          icon: 'icon-code',
          description: '前端交互设计以及代码优化，团队协作开发',
          url: 'https://www.wintool.cc/'
        },
        {
          title: 'slow',
          icon: 'icon-design',
          description: 'api交互设计，后端核心代码编写',
          url: 'https://github.com/devSlow'
        },
      ]
    };
  },
  methods: {
    openExternalLink(url) {
      window.open(url, '_blank');
    },
    handleQrCodeError() {
      this.qrCodeError = true;
    }
  }
};
</script>

<style lang="scss" scoped>
/* 全局样式 */
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* 减去顶部导航 */
  box-sizing: border-box;
  position: relative;
}

/* 欢迎区域 */
.welcome-section {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo-animation {
  display: inline-block;
  margin-bottom: 24px;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  padding: 10px;
  box-shadow: 0 8px 30px rgba(64, 158, 255, 0.2);
}

.title {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.gradient-text {
  background: linear-gradient(135deg, #409EFF, #67c23a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.description {
  font-size: 1.2rem;
  color: #606266;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* 区块样式 */
.section {
  margin-bottom: 60px;
  padding: 30px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  animation: fadeInUp 0.8s ease-out;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
  font-size: 2rem;
  font-weight: 600;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #409EFF, #67c23a);
  border-radius: 2px;
  margin: 15px auto 0;
}

/* 图标样式 - 使用本地图片 */
[class^="icon-"] {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
}

/* 开发与设计部分的图标特别样式 */
.dev-design-icon {
  width: 2.2em !important;
  height: 2.2em !important;
}

/* 本地图标引用 - 需要将图片放置在对应路径 */
.icon-wechat { background-image: url('@/assets/icons/icon-wechat.png'); }
.icon-heart { background-image: url('@/assets/icons/icon-heart.png'); }
.icon-qrcode { background-image: url('@/assets/icons/icon-qrcode.png'); }
.icon-arrow-right { background-image: url('@/assets/icons/icon-arrow-right.png'); }
.icon-search { background-image: url('@/assets/icons/icon-search.png'); }
.icon-document { background-image: url('@/assets/icons/icon-document.png'); }
.icon-folder-opened { background-image: url('@/assets/icons/icon-folder-opened.png'); }
.icon-book-read { background-image: url('@/assets/icons/icon-book-read.png'); }
.icon-edit-outline { background-image: url('@/assets/icons/icon-edit-outline.png'); }
.icon-eye { background-image: url('@/assets/icons/icon-eye.png'); }
.icon-delete { background-image: url('@/assets/icons/icon-delete.png'); }
.icon-suitcase { background-image: url('@/assets/icons/icon-suitcase.png'); }
.icon-warning { background-image: url('@/assets/icons/icon-warning.png'); }
.icon-design { background-image: url('@/assets/icons/icon-design.png'); }
.icon-code { background-image: url('@/assets/icons/icon-code.png'); }

/* 图标圆圈样式 */
.icon-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f9ff, #e6f7ff);
  margin-bottom: 20px;
  transition: all 0.3s ease;
  color: #409EFF;
  font-size: 30px;
}

/* 友情链接样式 */
.friend-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.link-card {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none;
  color: inherit;
  animation: fadeInUp 0.8s ease-out;
}

.link-card:nth-child(2) { animation-delay: 0.2s; }
.link-card:nth-child(3) { animation-delay: 0.4s; }
.link-card:nth-child(4) { animation-delay: 0.6s; }

.link-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(64, 158, 255, 0.1);
}

.link-card:hover .icon-circle {
  transform: scale(1.1);
  background: linear-gradient(135deg, #409EFF, #67c23a);
  color: white;
}

.link-info {
  flex-grow: 1;
  margin-left: 20px;
}

.link-info h3 {
  margin: 0 0 10px;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
}

.link-info p {
  margin: 0;
  color: #606266;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* 赞助支持区域样式 */
.payment-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.payment-card {
  background-color: white;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  animation: fadeInUp 0.8s ease-out;
  border: none;
}

.payment-card:nth-child(2) { animation-delay: 0.2s; }

.payment-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(64, 158, 255, 0.1);
}

.payment-card:hover .icon-circle {
  transform: scale(1.1);
  background: linear-gradient(135deg, #409EFF, #67c23a);
  color: white;
}

.payment-card h3 {
  margin: 0 0 15px;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
}

.payment-desc {
  color: #606266;
  font-size: 0.95rem;
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.5;
}

.primary-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: linear-gradient(135deg, #409EFF, #3a8ee6);
  border: none;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: all 0.3s ease;
  font-weight: 600;
  padding: 12px 36px;
  font-size: 1rem;
  border-radius: 50px;
  box-shadow: 0 4px 14px rgba(64, 158, 255, 0.3);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(64, 158, 255, 0.4);
  background: linear-gradient(135deg, #3a8ee6, #3071a9);
  color: white;
}

.primary-button i {
  margin-right: 8px;
  width: 1em;
  height: 1em;
}

/* 样式卡片 */
.style-card {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: inherit;
  animation: fadeInUp 0.8s ease-out;
  min-height: 160px;
  width: 100%;
  box-sizing: border-box;
}

.style-card:nth-child(2) { animation-delay: 0.2s; }
.style-card:nth-child(3) { animation-delay: 0.4s; }
.style-card:nth-child(4) { animation-delay: 0.6s; }

.style-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(64, 158, 255, 0.1);
}

.style-card:hover .icon-circle {
  transform: scale(1.1);
  background: linear-gradient(135deg, #409EFF, #67c23a);
  color: white;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-dialog {
  background-color: #fff;
  border-radius: 16px;
  width: 90%;
  max-width: 350px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
  border: none;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  padding: 20px 20px 15px;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
}

.modal-title {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
  font-weight: 600;
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #909399;
  line-height: 1;
  padding: 0;
  transition: all 0.3s ease;
}

.modal-close:hover {
  color: #409EFF;
  transform: translateY(-50%) scale(1.1);
}

.modal-body {
  padding: 20px;
  text-align: center;
}

.modal-footer {
  padding: 10px 20px 20px;
  border-top: 1px solid #e8e8e8;
  text-align: right;
}

.qr-container {
  padding: 20px 0;
>>>>>>> 30d2114 (000)
}

.qr-code {
  width: 200px;
  height: 200px;
  object-fit: cover;
<<<<<<< HEAD
  border-radius: 4px;
  border: 1px solid #ebeef5;
}

.friend-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.link-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.link-icon {
  font-size: 2.5rem;
  color: #409EFF;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #ecf5ff;
  border-radius: 50%;
}

.link-info h3 {
  margin: 0 0 5px;
  color: #303133;
  font-size: 1.1rem;
}

.link-info p {
  margin: 0;
  color: #606266;
  font-size: 0.9rem;
}

.service-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.service-list li {
  background-color: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
}

.service-list li i {
  color: #409EFF;
  margin-right: 10px;
  font-size: 1.2rem;
}

@media (max-width: 768px) {

  .friend-links,
  .payment-options {
    grid-template-columns: 1fr;
  }

  .qr-code {
    width: 120px;
    height: 120px;
  }
}
</style>
=======
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.qr-placeholder {
  color: #F56C6C;
  padding: 40px 0;
  text-align: center;
}

.qr-placeholder i {
  font-size: 3rem;
  margin-bottom: 10px;
  width: 64px;
  height: 64px;
}

.qr-placeholder p {
  margin: 0;
  font-size: 0.9rem;
}

.default-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: all 0.3s ease;
  font-weight: 500;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.default-button:hover {
  background: #f5f7fa;
  border-color: #409EFF;
  color: #409EFF;
}

/* 联系区域 - 与ArticleOptimizer保持一致 */
.contact-section {
  margin-top: auto;
  text-align: center;
  padding: 25px;
  color: #606266;
  font-size: 15px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.contact-section p {
  color: #606266;
  font-size: 15px;
  margin: 0;
}

.contact-section a {
  color: #409EFF;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
}

.contact-section a:hover {
  color: #66b1ff;
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 50%响应式布局 - 中等屏幕优化 */
  .about-container {
    padding: 20px 15px;
    min-height: calc(100vh - 80px);
  }
  
  .welcome-section {
    margin-bottom: 40px;
    padding: 30px 15px;
  }
  
  .logo {
    width: 100px;
    height: 100px;
  }
  
  .title {
    font-size: 2.2rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .section {
    padding: 20px;
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  /* 友情链接和支付选项响应式调整 */
  .friend-links, .payment-options {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  /* 核心功能区域 - 中等屏幕优化 */
  .feature-col {
    width: 100%;
  }
  
  .feature-card {
    padding: 25px 15px;
  }
  
  .icon-circle {
    width: 70px;
    height: 70px;
    font-size: 25px;
  }
  
  .icon-large {
    font-size: 35px;
  }
  
  .feature-title {
    font-size: 1.3rem;
  }
  
  .qr-code {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  /* 50%响应式布局 - 小屏幕优化 */
  .title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .primary-button {
    font-size: 0.9rem;
    padding: 10px 25px;
  }
  
  .link-info h3 {
    font-size: 1.2rem;
  }
  
  .link-info p {
    font-size: 0.9rem;
  }
}
</style>
>>>>>>> 30d2114 (000)
