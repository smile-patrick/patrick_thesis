<template>
  <div id="app">
<<<<<<< HEAD
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/article-optimizer">内容优化</router-link> |
      <router-link to="/about">文章检测</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  /* 允许内容滚动，但不显示滚动条 */
  overflow: auto;
}

/* 隐藏滚动条但保留滚动功能 */
body::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}

body {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 允许内容自适应，内容少时不会出现滚动，内容多时可以滚动 */
  min-height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #409EFF;
}

/* 隐藏所有元素的滚动条但保留滚动功能 */
=======
    <!-- 背景装饰 -->
    <div class="app-background"></div>
    
    <!-- 移动端侧边菜单开关 -->
    <button class="menu-toggle" @click="toggleSideMenu" v-show="isMobile">
      <i class="el-icon-menu"></i>
    </button>
    
    <!-- 移动端侧边菜单 -->
    <div class="side-menu" :class="{ 'side-menu--open': isSideMenuOpen }">
      <div class="side-menu-header">
        <h3>菜单</h3>
        <button class="close-button" @click="toggleSideMenu">
          <i class="el-icon-close"></i>
        </button>
      </div>
      <div class="side-menu-content">
        <router-link to="/" class="side-menu-link" @click="toggleSideMenu">首页</router-link>
        <router-link to="/article-optimizer" class="side-menu-link" @click="toggleSideMenu">内容优化</router-link>
        <router-link to="/about" class="side-menu-link" @click="toggleSideMenu">文章检测</router-link>
      </div>
    </div>
    
    <!-- 遮罩层 -->
    <div class="overlay" v-if="isSideMenuOpen" @click="toggleSideMenu"></div>
    
    <!-- 导航栏（桌面端） -->
    <nav class="nav-container" v-if="!isMobile">
      <div class="nav-content">
        <router-link to="/" class="nav-link">首页</router-link>
        <span class="nav-separator"></span>
        <router-link to="/article-optimizer" class="nav-link">内容优化</router-link>
        <span class="nav-separator"></span>
        <router-link to="/about" class="nav-link">文章检测</router-link>
      </div>
    </nav>
    
    <!-- 页面内容 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSideMenuOpen: false,
      isMobile: false,
      mobileWidthThreshold: 768
    }
  },
  created() {
    // 初始化时检查屏幕宽度
    this.checkScreenWidth();
    // 监听窗口大小变化
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 清理事件监听器
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleSideMenu() {
      // 强制在移动端才能打开菜单
      if (this.isMobile) {
        this.isSideMenuOpen = !this.isSideMenuOpen;
        // 防止背景滚动
        document.body.style.overflow = this.isSideMenuOpen ? 'hidden' : 'auto';
      }
    },
    handleResize() {
      this.checkScreenWidth();
      // 如果屏幕变宽且菜单打开，则关闭菜单
      if (!this.isMobile && this.isSideMenuOpen) {
        this.toggleSideMenu();
      }
    },
    checkScreenWidth() {
      // 强制重新计算屏幕宽度状态
      this.isMobile = window.innerWidth < this.mobileWidthThreshold;
    }
  }
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* 隐藏滚动条但保留滚动功能 */
>>>>>>> 30d2114 (000)
::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

<<<<<<< HEAD
=======
/* 应用主容器 */
#app {
  min-height: 100vh;
  position: relative;
  color: #2c3e50;
}

/* 应用背景 */
.app-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%);
  z-index: -1;
}

/* 移动端菜单按钮 */
.menu-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1010;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 20px;
  color: #409EFF;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
}

/* 侧边菜单 - 确保在移动端始终可见 */
.side-menu {
  position: fixed !important;
  top: 0 !important;
  left: -300px !important; /* 确保完全收进去 */
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1005;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  transform: translateX(0); /* 确保没有额外的位移 */
}

.side-menu--open {
  left: 0 !important;
  transform: translateX(0);
}

.side-menu-header {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.side-menu-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  color: #606266;
  cursor: pointer;
  padding: 5px;
}

.side-menu-content {
  flex: 1;
  padding: 20px 0;
}

.side-menu-link {
  display: block;
  padding: 15px 30px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.side-menu-link:hover {
  background-color: rgba(64, 158, 255, 0.05);
  color: #409EFF;
}

.side-menu-link.router-link-exact-active {
  background-color: rgba(64, 158, 255, 0.1);
  color: #409EFF;
  border-left-color: #409EFF;
}

/* 遮罩层 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1004;
  transition: opacity 0.3s ease;
}

/* 导航栏样式（桌面端） */
.nav-container {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #409EFF;
  background-color: rgba(64, 158, 255, 0.05);
}

.nav-link.router-link-exact-active {
  color: #409EFF;
  background-color: rgba(64, 158, 255, 0.1);
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
}

.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 3px;
  background-color: #409EFF;
  border-radius: 2px;
}

.nav-separator {
  width: 1px;
  height: 20px;
  background-color: #e0e0e0;
  margin: 0 15px;
}

/* 主内容区域 */
.main-content {
  min-height: calc(100vh - 80px);
}

/* 固定高度的文本区域 */
>>>>>>> 30d2114 (000)
.fixed-textarea>>>.el-textarea__inner {
  resize: none !important;
  overflow-y: auto;
  min-height: 150px;
  max-height: 150px;
}
<<<<<<< HEAD
=======

/* 响应式设计 - 为导航栏添加过渡效果 */
@media (max-width: 768px) {
  .nav-container {
    display: none !important;
  }
  
  /* 确保菜单切换按钮在移动端始终可见 */
  .menu-toggle {
    display: flex !important;
  }
}

/* 小屏幕优化侧边菜单 */
@media (max-width: 480px) {
  .side-menu {
    width: 85vw !important;
    left: -85vw !important; /* 确保在小屏幕上完全收进去 */
    transform: translateX(0) !important;
  }
  
  .side-menu-header {
    padding: 15px;
  }
  
  .side-menu-header h3 {
    font-size: 1.1rem;
  }
  
  .side-menu-link {
    padding: 12px 20px;
    font-size: 1rem;
  }
  
  .side-menu--open {
      left: 0 !important;
      transform: translateX(0) !important;
    }
    
    .menu-toggle {
      width: 45px;
      height: 45px;
      font-size: 18px;
      top: 15px;
      left: 15px;
    }
}

/* 确保侧边菜单在移动端优先显示 */
@media (max-width: 768px) {
  .side-menu {
    z-index: 1005 !important;
  }
  
  .overlay {
    z-index: 1004 !important;
  }
  
  .menu-toggle {
    z-index: 1010 !important;
  }
}
>>>>>>> 30d2114 (000)
</style>
