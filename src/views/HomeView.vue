<template>
  <div class="home-container">
<<<<<<< HEAD
    <div class="welcome-section">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>智能文章优化工具</h1>
      <p class="description">
        一款帮助您优化文章内容的智能工具，只需几步即可获得质量更好的文章
      </p>
      <el-button type="primary" @click="goToOptimizer">开始优化</el-button>
    </div>

    <div class="features-section">
      <h2>核心功能</h2>
      <el-row :gutter="20">
        <el-col :sm="8">
          <el-card class="feature-card">
            <div class="icon-container">
              <i class="el-icon-edit"></i>
            </div>
            <h3>文章润色</h3>
            <p>让您的文章表达更加流畅自然</p>
          </el-card>
        </el-col>
        <el-col :sm="8">
          <el-card class="feature-card">
            <div class="icon-container">
              <i class="el-icon-reading"></i>
            </div>
            <h3>提高可读性</h3>
            <p>优化文章结构，提高阅读体验</p>
          </el-card>
        </el-col>
        <el-col :sm="8">
          <el-card class="feature-card">
            <div class="icon-container">
              <i class="el-icon-connection"></i>
            </div>
            <h3>增强专业性</h3>
            <p>添加专业术语，使文章更具说服力</p>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="contact-section">
      <p>问题反馈： <a href="mailto:slow@linux.do"><i class="el-icon-message"></i> slow@linux.do</a></p>
    </div>

    <!-- 首次访问公告弹窗 -->
    <el-dialog title="重要提示" :visible.sync="showNotice" width="420px" :show-close="false" center>
      <div class="notice-content">
        <i class="el-icon-warning-outline warning-icon"></i>
        <p>本工具仅为文章内容优化使用，不得用于论文改写等学术不端行为。如有违反，一切后果由使用者自行承担！</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-checkbox v-model="doNotShowAgain">不再提示</el-checkbox>
        <el-button type="primary" @click="confirmNotice">我已了解</el-button>
      </span>
    </el-dialog>
=======
    <!-- 欢迎区域 -->
    <div class="welcome-section">
      <div class="logo-container">
        <div class="logo-animation">
          <img alt="AI工具" src="../assets/logo.png" class="logo">
        </div>
        <h1 class="title gradient-text">AI文章优化工具</h1>
      </div>
      <p class="description">
        一款帮助您优化文章内容的智能工具，只需几步即可获得质量更好的文章
      </p>
      <el-button type="primary" @click="goToOptimizer" class="primary-btn">
        开始优化
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>

    <!-- 核心功能 -->
    <div class="features-section">
      <h2 class="section-title">核心功能</h2>
      <div class="features-grid">
        <div class="feature-col">
          <div class="feature-card">
            <div class="icon-circle">
              <i class="el-icon-edit icon-large"></i>
            </div>
            <h3 class="feature-title">文章润色</h3>
            <p class="feature-description">让您的文章表达更加流畅自然，提升整体质量</p>
          </div>
        </div>
        <div class="feature-col">
          <div class="feature-card">
            <div class="icon-circle">
              <i class="el-icon-reading icon-large"></i>
            </div>
            <h3 class="feature-title">提高可读性</h3>
            <p class="feature-description">优化文章结构，调整段落布局，提高阅读体验</p>
          </div>
        </div>
        <div class="feature-col">
          <div class="feature-card">
            <div class="icon-circle">
              <i class="el-icon-connection icon-large"></i>
            </div>
            <h3 class="feature-title">增强专业性</h3>
            <p class="feature-description">添加专业术语，调整表述方式，使文章更具说服力</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系区域 -->
    <div class="contact-section">
      <p>©AI文章优化工具  <a href=""><i class="el-icon-message"></i> thesis.pblog.fun</a></p>
    </div>
>>>>>>> 30d2114 (000)
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
<<<<<<< HEAD
      showNotice: false,
      doNotShowAgain: false
    }
  },
  created() {
    // 检查是否需要显示公告
    const hasSeenNotice = localStorage.getItem('hasSeenNotice');
    if (!hasSeenNotice) {
      this.showNotice = true;
=======
>>>>>>> 30d2114 (000)
    }
  },
  methods: {
    goToOptimizer() {
      this.$router.push('/article-optimizer');
<<<<<<< HEAD
    },
    confirmNotice() {
      if (this.doNotShowAgain) {
        localStorage.setItem('hasSeenNotice', 'true');
      }
      this.showNotice = false;
=======
>>>>>>> 30d2114 (000)
    }
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.home-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  /* 减去顶部导航和一些内边距 */
  box-sizing: border-box;
  overflow: hidden;
  /* 禁止滚动 */
}

.welcome-section {
  text-align: center;
  margin-bottom: 40px;
}

.welcome-section img {
  width: 80px;
  /* 减小logo大小 */
  margin-bottom: 10px;
  /* 减小间距 */
}

.welcome-section h1 {
  font-size: 2.2rem;
  color: #409EFF;
  margin-bottom: 15px;
  /* 减小间距 */
}

.description {
  font-size: 1.1rem;
  color: #606266;
  margin-bottom: 20px;
  /* 减小间距 */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-section {
  flex-grow: 1;
}

.features-section h2 {
  text-align: center;
  margin-bottom: 20px;
  /* 减小间距 */
  color: #2c3e50;
=======
/* 全局样式 */
.home-container {
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
  margin-bottom: 80px;
  padding: 40px 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: fadeInUp 0.8s ease-out;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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

.primary-btn {
  font-size: 1.1rem;
  padding: 12px 36px;
  border-radius: 50px;
  background: linear-gradient(135deg, #409EFF, #3a8ee6);
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(64, 158, 255, 0.3);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(64, 158, 255, 0.4);
  background: linear-gradient(135deg, #3a8ee6, #3071a9);
}

/* 功能区域 */
.features-section {
  flex-grow: 1;
  margin-bottom: 60px;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
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

.features-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
}

.feature-col {
  animation: fadeInUp 0.8s ease-out;
  width: calc(33.333% - 20px); /* 三列布局，考虑间距 */
  max-width: 350px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.feature-col:nth-child(2) {
  animation-delay: 0.2s;
}

.feature-col:nth-child(3) {
  animation-delay: 0.4s;
  width: calc(33.333% - 20px); /* 与前两个保持一致 */
  max-width: 350px;
  margin: 0;
>>>>>>> 30d2114 (000)
}

.feature-card {
  text-align: center;
  height: 100%;
<<<<<<< HEAD
  transition: all 0.3s;
  padding: 15px 10px;
  /* 减小内边距 */
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.icon-container {
  margin: 10px 0;
  /* 减小间距 */
}

.icon-container i {
  font-size: 35px;
  /* 稍微减小图标 */
  color: #409EFF;
}

.feature-card h3 {
  font-size: 1.1rem;
  margin: 10px 0;
  /* 减小间距 */
  color: #2c3e50;
}

.feature-card p {
  color: #606266;
  font-size: 0.9rem;
  /* 稍微减小字体 */
}

.contact-section {
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #eaeaea;
=======
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 30px 20px;
  border-radius: 16px;
  border: none;
  background-color: white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  box-sizing: border-box;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(64, 158, 255, 0.1);
}

.icon-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f9ff, #e6f7ff);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.feature-card:hover .icon-circle {
  transform: scale(1.1);
  background: linear-gradient(135deg, #409EFF, #67c23a);
}

.icon-large {
  font-size: 40px;
  color: #409EFF;
  transition: all 0.3s ease;
}

.feature-card:hover .icon-large {
  color: white;
  transform: rotate(10deg);
}

.feature-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #2c3e50;
  font-weight: 600;
}

.feature-description {
  color: #606266;
  font-size: 1rem;
  line-height: 1.6;
}

/* 联系区域 */
.contact-section {
  margin-top: 40px;
  text-align: center;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
}

.contact-section p {
  color: #909399;
  font-size: 0.95rem;
}

.contact-link {
  color: #409EFF;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.contact-link:hover {
  color: #66b1ff;
}

.contact-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #409EFF;
  transition: width 0.3s ease;
}

.contact-link:hover::after {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 50%响应式布局 - 中等屏幕优化 */
  .home-container {
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
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  /* 核心功能区域 - 50%响应式调整 */
  .feature-col {
    width: calc(50% - 10px);
    max-width: none;
  }
  
  .feature-col:nth-child(3) {
    width: calc(50% - 10px);
    margin: 0;
  }
  
  .feature-card {
    padding: 25px 15px;
  }
  
  .icon-circle {
    width: 70px;
    height: 70px;
  }
  
  .icon-large {
    font-size: 35px;
  }
  
  .feature-title {
    font-size: 1.3rem;
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
  
  .primary-btn {
    font-size: 1rem;
    padding: 10px 30px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  /* 核心功能区域 - 小屏幕优化 */
  .feature-col {
    width: 100%;
  }
  
  .feature-col:nth-child(3) {
    width: 100%;
  }
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
>>>>>>> 30d2114 (000)
}

.contact-section p {
  color: #606266;
<<<<<<< HEAD
  font-size: 0.9rem;
=======
  font-size: 15px;
  margin: 0;
>>>>>>> 30d2114 (000)
}

.contact-section a {
  color: #409EFF;
  text-decoration: none;
  transition: color 0.3s;
<<<<<<< HEAD
=======
  font-weight: 500;
>>>>>>> 30d2114 (000)
}

.contact-section a:hover {
  color: #66b1ff;
<<<<<<< HEAD
}

/* 确保el-row在容器内 */
.el-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* 公告弹窗样式 */
.notice-content {
  text-align: center;
  padding: 10px 0;
}

.warning-icon {
  font-size: 48px;
  color: #E6A23C;
  margin-bottom: 15px;
  display: block;
}

.notice-content p {
  line-height: 1.6;
  color: #606266;
  font-size: 15px;
}

.dialog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
=======
  text-decoration: underline;
>>>>>>> 30d2114 (000)
}
</style>
