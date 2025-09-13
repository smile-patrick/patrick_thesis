<template>
  <div class="article-optimizer">
<<<<<<< HEAD
    <h1>内容优化工具</h1>
    <el-card class="optimizer-card">
      <div class="input-section">
        <h3>文章输入</h3>
=======
    <!-- 欢迎区域 -->
    <div class="welcome-section">
      <h1 class="title gradient-text text-center">内容优化工具</h1>
      <p class="description">
        一款帮助您优化文章内容的智能工具，只需几步即可获得质量更好的文章
      </p>
      
      <!-- 优化后的注意事项 -->
      <div class="optimized-notice-section">
        <div class="notice-card warning-notice">
          <div class="notice-icon">
            <i class="el-icon-warning"></i>
          </div>
          <div class="notice-content">
            <h4 class="notice-title">声明</h4>
            <p class="notice-text">本工具仅提供文章优化建议，不会替代用户进行原创内容创作。任何学术不端行为或产生的后果与本工具无关</p>
          </div>
        </div>
        
        <div class="notice-card info-notice">
          <div class="notice-icon">
            <i class="el-icon-info"></i>
          </div>
          <div class="notice-content">
            <h4 class="notice-title">注意事项</h4>
            <p class="notice-text">请遵守学术规范和版权法规，维护良好学风，使用本工具生成的内容应当经过用户自己的判断和修改</p>
          </div>
        </div>
      </div>
    </div>
    <el-card class="optimizer-card">
      <div class="input-section">
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
          <h3 style="margin: 0;">文章输入</h3>
          <span style="color: #909399; font-size: 12px; margin-left: 10px; display: flex; align-items: center;">默认使用模型：gpt-4.1-mini</span>
        </div>
>>>>>>> 30d2114 (000)
        <el-input type="textarea" :rows="8" placeholder="请在此输入需要优化的文章内容..." v-model="inputText"
          class="fixed-textarea"></el-input>
      </div>

      <div class="action-section">
        <div class="usage-info">
          <template v-if="!hasCustomApiConfig">
            <el-progress :percentage="(usageCount / usageLimit) * 100" :format="format"
              :status="usageLimitReached ? 'exception' : null"></el-progress>
            <span class="usage-text">今日剩余使用次数: {{ usageLimit - usageCount }}/{{ usageLimit }}</span>
          </template>
          <template v-else>
            <div class="vip-badge">
              <i class="el-icon-star-on"></i> 高级用户
            </div>
            <span class="usage-text custom-api-text">使用自定义API，不受次数限制</span>
          </template>
        </div>

        <div class="action-buttons">
          <el-button type="primary" @click="optimizeText" :loading="loading" :disabled="usageLimitReached">
            {{ loading ? `优化中${loadingDots}` : (usageLimitReached ? '今日次数已用完' : '一键优化') }}
          </el-button>
          <el-tooltip content="自定义API设置" placement="top">
            <el-button type="info" icon="el-icon-setting" circle @click="openApiSettings"></el-button>
          </el-tooltip>
        </div>
      </div>

      <div class="output-section" v-if="showOutput">
        <h3>优化结果</h3>
        <el-divider></el-divider>
        <div class="result-container">
          <div class="text-section">
            <div class="text-label">原文:</div>
            <div class="text-content">{{ inputText }}</div>
          </div>

          <el-divider content-position="center">优化结果</el-divider>

          <div class="text-section">
            <div class="text-label">修改后:</div>
            <div class="text-content modified-content" v-html="highlightedOutput"></div>
          </div>

          <div class="output-actions">
            <el-button type="primary" @click="regenerate" :loading="loading" size="small">
              <i class="el-icon-refresh-right"></i> 重新生成
            </el-button>
            <el-button type="success" @click="copyToClipboard" size="small">复制结果</el-button>
            <el-button @click="clearAll" size="small">清空</el-button>
          </div>
        </div>
      </div>
    </el-card>

    <!-- API设置对话框 -->
    <el-dialog title="自定义API设置" :visible.sync="apiSettingsVisible" width="500px" :close-on-click-modal="false"
      class="api-settings-dialog">
<<<<<<< HEAD
      <el-form :model="apiSettings" label-width="120px" label-position="left">
        <el-form-item label="API地址">
          <el-input v-model="apiSettings.apiUrl" placeholder="如: https://api.example.com"></el-input>
        </el-form-item>

        <el-form-item label="API密钥">
          <el-input v-model="apiSettings.apiKey" placeholder="请输入API密钥，通常以sk-开头" show-password></el-input>
        </el-form-item>

        <el-form-item label="模型名称">
          <el-input v-model="apiSettings.modelName" placeholder="请输入模型名称，默认: gpt-4.1-mini"></el-input>
        </el-form-item>

        <div class="api-vip-tip">
=======
      <el-form :model="apiSettings" label-width="80px" label-position="left" style="--el-form-item-label-width: 120px; --el-form-item-content-width: calc(100% - 120px - 3ch);">
        <el-form-item label="API地址">
          <el-input v-model="apiSettings.apiUrl" placeholder="如: https://api.example.com" style="width: calc(100% - 3ch);"></el-input>
        </el-form-item>

        <el-form-item label="API密钥">
          <el-input v-model="apiSettings.apiKey" placeholder="请输入API密钥，通常以sk-开头" show-password style="width: calc(100% - 3ch);"></el-input>
        </el-form-item>

        <el-form-item label="模型名称">
          <el-input v-model="apiSettings.modelName" placeholder="请输入模型名称，默认: gpt-4.1-mini" style="width: calc(100% - 3ch);"></el-input>
        </el-form-item>

        <div class="api-vip-tip" style="margin-bottom: 20px;">
>>>>>>> 30d2114 (000)
          <el-alert type="success" show-icon title="使用自定义API可享受无限制使用权限"
            description="当您同时设置了API地址和API密钥，将不受每日使用次数的限制。如有需要，请自行联系我获取" :closable="false">
          </el-alert>
        </div>

<<<<<<< HEAD
        <div class="api-settings-footer">
          <el-button @click="resetApiSettings" size="small">恢复默认</el-button>
          <div class="spacer"></div>
          <el-button @click="apiSettingsVisible = false">取消</el-button>
          <el-button type="primary" @click="saveApiSettings">保存</el-button>
        </div>
      </el-form>

=======
        <div class="api-settings-footer" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <el-button @click="resetApiSettings" size="small">恢复默认</el-button>
          <div>
            <el-button @click="apiSettingsVisible = false">取消</el-button>
            <el-button type="primary" @click="saveApiSettings">保存</el-button>
          </div>
        </div>
      </el-form>
>>>>>>> 30d2114 (000)
      <div class="api-settings-info">
        <el-alert title="什么是自定义API设置?" type="info" description="如果你有自己的API服务或密钥，可以在这里配置。如果不确定这些设置，请保持默认值。"
          :closable="false" show-icon>
        </el-alert>
      </div>
    </el-dialog>
<<<<<<< HEAD

    <div class="contact-info">
      <p>没时间自行优化的可以联系我帮忙优化，邮箱：<a href="mailto:slow@linux.do">slow@linux.do</a></p>
=======
    
    <div class="contact-info">
      <p>©AI文章优化工具  <a href="mailto:slow@linux.do"> thesis.pblog.fun</a></p>
>>>>>>> 30d2114 (000)
    </div>
  </div>
</template>

<script>
import { optimizeArticle, getApiConfig, saveApiConfig, resetApiConfig } from '../services/apiService';
import jsdiff from 'diff'; // 需要安装: npm install diff
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ArticleOptimizer',
  data() {
    return {
      optimizationType: 'readability',
      loading: false,
      loadingDots: '',
      loadingInterval: null,
      usageCount: 0,
<<<<<<< HEAD
      usageLimit: 5,
=======
      usageLimit: 10,
>>>>>>> 30d2114 (000)
      usageLimitReached: false,
      // API设置相关
      apiSettingsVisible: false,
      apiSettings: {
        apiUrl: '',
        apiKey: '',
        modelName: ''
      },
      // 添加此属性用于触发计算属性更新
      apiConfigVersion: 0
    }
  },
  computed: {
    ...mapGetters(['getArticleOptimizerState']),
    inputText: {
      get() {
        return this.getArticleOptimizerState.inputText;
      },
      set(value) {
        this.setArticleOptimizerInput(value);
      }
    },
    outputText() {
      return this.getArticleOptimizerState.outputText;
    },
    highlightedOutput() {
      return this.getArticleOptimizerState.highlightedOutput;
    },
    errorMessage() {
      return this.getArticleOptimizerState.errorMessage;
    },
    showOutput() {
      return this.outputText && !this.errorMessage;
    },
    // 检查用户是否使用自定义API (同时提供了API地址和API密钥)
    hasCustomApiConfig() {
      // 使用apiConfigVersion触发计算属性更新
      this.apiConfigVersion; // 读取此属性，确保在它变化时重新计算

      const customApiUrl = localStorage.getItem('customApiUrl');
      const customApiKey = localStorage.getItem('customApiKey');
      const result = !!(customApiUrl && customApiKey);

      console.log('检查自定义API配置状态:', {
        apiConfigVersion: this.apiConfigVersion,
        customApiUrl: customApiUrl || '(未设置)',
        customApiKey: customApiKey ? '已设置' : '未设置',
        结果: result ? '使用自定义API' : '使用默认API'
      });

      return result;
    }
  },
  created() {
    this.checkUsageLimit();
    this.loadApiSettings();
  },
  methods: {
    ...mapMutations(['setArticleOptimizerInput', 'setArticleOptimizerOutput', 'clearArticleOptimizer']),
    // API设置相关方法
    loadApiSettings() {
      const config = getApiConfig();
      // 首次打开对话框时不显示默认值，保护系统安全
      this.apiSettings.apiUrl = localStorage.getItem('customApiUrl') || '';
      this.apiSettings.apiKey = localStorage.getItem('customApiKey') || '';
      this.apiSettings.modelName = localStorage.getItem('customModelName') || '';
    },
    openApiSettings() {
      this.loadApiSettings(); // 确保显示最新设置
      this.apiSettingsVisible = true;
    },
    resetApiSettings() {
      // 检查是否从自定义API切换到默认API
      const wasCustom = this.hasCustomApiConfig;

      resetApiConfig();
      this.loadApiSettings();

      // 增加版本号触发计算属性更新
      this.apiConfigVersion++;

      // 重新检查使用限制，在切换回默认API时恢复使用次数限制
      this.checkUsageLimit();

      // 强制刷新组件状态
      this.$forceUpdate();

      // 为确保状态全部更新，添加一个延迟刷新
      setTimeout(() => {
        this.$forceUpdate();
        console.log('延迟刷新后状态：', {
          apiConfigVersion: this.apiConfigVersion,
          使用自定义API: this.hasCustomApiConfig,
          usageLimitReached: this.usageLimitReached
        });
      }, 100);

      if (wasCustom) {
        this.$message({
          message: '已恢复默认API设置，将受到每日使用次数限制',
          type: 'warning',
          duration: 3000
        });
      } else {
        this.$message.info('已恢复默认API设置');
      }
    },
    saveApiSettings() {
      // 检查是否从自定义API切换到默认API
      const wasCustom = this.hasCustomApiConfig;
      console.log('保存前状态:', {
        使用自定义API: wasCustom,
        apiUrl: this.apiSettings.apiUrl || '(空)',
        apiKey: this.apiSettings.apiKey ? '已设置' : '(空)'
      });

      saveApiConfig(
        this.apiSettings.apiUrl,
        this.apiSettings.apiKey,
        this.apiSettings.modelName
      );

      // 增加版本号触发计算属性更新
      this.apiConfigVersion++;

      // 保存后重新检查使用限制，如果用户填写了自定义API信息，需要刷新显示
      this.checkUsageLimit();

      // 强制刷新组件状态
      this.$forceUpdate();

      // 为确保状态全部更新，添加一个延迟刷新
      setTimeout(() => {
        this.$forceUpdate();
        console.log('延迟刷新后状态：', {
          apiConfigVersion: this.apiConfigVersion,
          使用自定义API: this.hasCustomApiConfig,
          usageLimitReached: this.usageLimitReached
        });
      }, 100);

      // 检查localStorage中是否成功保存了设置
      if (wasCustom && !this.hasCustomApiConfig) {
        // 用户清空了API地址或API密钥，从自定义API切换回默认API
        this.$message({
          message: 'API设置已保存，您已切换回默认API，将受到每日使用次数限制',
          type: 'warning',
          duration: 3000
        });
      } else if (!wasCustom && this.hasCustomApiConfig) {
        // 用户新增了自定义API配置
        this.$message({
          message: 'API设置已保存，您现在是高级用户，不受使用次数限制',
          type: 'success',
          duration: 3000
        });
      } else {
        // 保持相同状态，只是更新了信息
        this.$message.success('API设置已保存');
      }

      this.apiSettingsVisible = false;
    },
    checkUsageLimit() {
      // 如果用户同时提供了自定义API地址和密钥，则不受使用次数限制
      if (this.hasCustomApiConfig) {
        console.log('检测到自定义API配置，重置使用限制');
        this.usageCount = 0;
        this.usageLimitReached = false;
        return;
      }

      console.log('使用默认API，检查使用次数限制');
      const today = new Date().toISOString().split('T')[0]; // 获取当前日期，格式为YYYY-MM-DD
      const storedDate = localStorage.getItem('optimizerLastUsageDate');
      const storedCount = localStorage.getItem('optimizerUsageCount');

      if (storedDate === today) {
        // 如果存储的日期是今天，获取使用次数
        this.usageCount = parseInt(storedCount || '0', 10);
        if (this.usageCount >= this.usageLimit) {
          this.usageLimitReached = true;
        }
      } else {
        // 新的一天，重置使用次数
        localStorage.setItem('optimizerLastUsageDate', today);
        localStorage.setItem('optimizerUsageCount', '0');
        this.usageCount = 0;
        this.usageLimitReached = false;
      }
    },
    format(percentage) {
      // 如果用户使用自定义API，显示不受限制的信息
      if (this.hasCustomApiConfig) {
        return '不受限制';
      }
      return this.usageLimitReached ? '已用完' : `${this.usageCount}/${this.usageLimit}`;
    },
    incrementUsageCount() {
      // 如果用户使用自定义API，不增加使用次数
      if (this.hasCustomApiConfig) {
        return;
      }

      this.usageCount++;
      localStorage.setItem('optimizerUsageCount', this.usageCount.toString());

      if (this.usageCount >= this.usageLimit) {
        this.usageLimitReached = true;
      }
    },
    async optimizeText() {
      if (!this.inputText.trim()) {
        this.$message.warning('请先输入需要优化的文章内容');
        return;
      }

      // 检查使用次数限制 (仅对非自定义API用户)
      if (!this.hasCustomApiConfig && this.usageLimitReached) {
        this.$message.error(`每天最多只能使用${this.usageLimit}次优化功能，请明天再来`);
        return;
      }

      this.loading = true;
      this.setArticleOptimizerOutput({ output: '', highlighted: '', error: '' });
      this.startLoadingAnimation();

      try {
        // 缓存输入文本，避免重复访问
        const inputText = this.inputText;

        const result = await optimizeArticle(
          inputText,
          null, // 提示词已在API服务中定义
          this.optimizationType
        );

        // 在生产环境中减少不必要的日志输出
        if (process.env.NODE_ENV !== 'production') {
          console.log('优化结果完整响应:', result);
        }

        if (result.error) {
          this.$message.error(result.text);
          this.loading = false;
          this.stopLoadingAnimation();
          return;
        } else if (!result.text) {
          this.$message.error('优化服务暂时不可用，请稍后重试');
          this.loading = false;
          this.stopLoadingAnimation();
          return;
        } else if (result.text === '内容优化服务暂不可用，请稍后重试') {
          // 处理特定的错误消息，这是截图中显示的错误
          if (process.env.NODE_ENV !== 'production') {
            console.log('API返回了特定的服务不可用消息');
          }
          this.$message.error('AI服务过载，请稍等片刻再试');
          this.loading = false;
          this.stopLoadingAnimation();
          return;
        } else if (this.isEmptyResult(result.text)) {
          // 检测到类似"修改后:"和"无法获取优化结果"的格式
          this.$message.error('内容优化未成功，可能是网络问题或服务繁忙');
          this.loading = false;
          this.stopLoadingAnimation();
          return;
        } else {
          const processedOutput = this.extractModifiedText(result.text);
          // 如果处理后的输出为空，则说明在extractModifiedText中已显示了错误提示
          if (!processedOutput) {
            this.loading = false;
            this.stopLoadingAnimation();
            return;
          }

          // 仅在开发环境中输出日志
          if (process.env.NODE_ENV !== 'production') {
            console.log('处理后的输出:', {
              length: processedOutput.length,
              preview: processedOutput.substring(0, 100) + (processedOutput.length > 100 ? '...' : '')
            });
          }

          const highlightedResult = this.generateHighlightedDiff(inputText, processedOutput);
          this.setArticleOptimizerOutput({
            output: processedOutput,
            highlighted: highlightedResult,
            error: ''
          });
          // 增加使用次数
          this.incrementUsageCount();
        }
      } catch (error) {
        console.error('优化失败:', error);
        this.$message.error('文章优化失败，可能是网络不稳定或服务器繁忙');
        this.loading = false;
        this.stopLoadingAnimation();
        return;
      } finally {
        this.loading = false;
        this.stopLoadingAnimation();
      }
    },
    isEmptyResult(text) {
      // 检测是否为空结果或包含"无法获取优化结果"的特殊情况
      if (!text || text.length < 10) return true;

      const lines = text.split('\n').map(line => line.trim()).filter(line => line);

      // 仅在开发环境中输出调试信息
      if (process.env.NODE_ENV !== 'production') {
        console.log('检查是否为空结果:', { lines: lines.slice(0, 3), totalLines: lines.length });
      }

      // 使用更高效的正则表达式检测常见的空结果模式
      const emptyPattern = /优化结果|修改后[\s:：]*$|无法获取优化结果|无法|获取失败/;
      if ((lines.length <= 3) && emptyPattern.test(text)) {
        return true;
      }

      return false;
    },
    async regenerate() {
      if (!this.inputText.trim()) {
        this.$message.warning('无法重新生成，请先输入需要优化的文章内容');
        return;
      }

      this.$message({
        message: '正在重新生成优化结果...',
        type: 'info',
        duration: 2000
      });

      await this.optimizeText();
    },
    extractModifiedText(text) {
      // 输出原始文本进行调试（仅在开发环境）
      if (process.env.NODE_ENV !== 'production') {
        console.log('解析的原始文本:', {
          textLength: text.length,
          textPreview: text.substring(0, 100) + (text.length > 100 ? '...' : '')
        });
      }

      // 使用组合条件检查特定错误模式
      if (text.includes('内容优化服务暂时不可用') || text.includes('请稍后重试')) {
        if (process.env.NODE_ENV !== 'production') {
          console.log('检测到特定的服务不可用消息');
        }
        this.$message.error('内容优化服务响应异常，请等待几分钟后再尝试');
        return '';
      }

      // 合并检查常见的错误情况
      if (text.includes('无法获取优化结果') ||
        text.trim() === '修改后:' ||
        (text.includes('原文') && !text.includes('修改后'))) {
        if (process.env.NODE_ENV !== 'production') {
          console.log('响应中缺少必要的内容部分');
        }
        this.$message.error('优化未完成，请检查网络连接并稍后再试');
        return '';
      }

      // 使用更精确的正则表达式提取修改后内容
      const modifiedPattern = /修改后[:：]\s*([\s\S]*)/;
      const match = text.match(modifiedPattern);

      // 日志记录匹配结果（仅在开发环境）
      if (process.env.NODE_ENV !== 'production') {
        console.log('修改后匹配结果:', {
          hasMatch: !!match,
          matchGroups: match ? match.length : 0,
          matchPreview: match ? match[1]?.substr(0, 50) + (match[1]?.length > 50 ? '...' : '') : 'No match'
        });
      }

      if (match && match[1]) {
        const result = match[1].trim();
        // 检查提取后的内容是否为空或过短
        if (!result || result.length < 5) {
          this.$message.error('优化结果异常，请尝试刷新页面或稍后重试');
          return '';
        }
        return result;
      }

      // 尝试另一种常见模式：直接返回优化后的文本而没有"修改后:"标记
      if (text && text.length > this.inputText.length / 2 && !text.includes('无法') && !text.includes('error')) {
        if (process.env.NODE_ENV !== 'production') {
          console.log('没有找到"修改后"标记，但返回了看起来合理的内容');
        }
        return this.cleanMarkdown(text);
      }

      // 如果没有找到标准格式，则进行基本清理并返回
      return this.cleanMarkdown(text);
    },
    cleanMarkdown(text) {
      // 使用单个正则表达式简化markdown清理过程
      return text
        .replace(/(\*\*|`)(.*?)\1/g, '$2') // 同时处理粗体和内联代码
        .replace(/\*(.*?)\*/g, '$1')       // 处理斜体
        .replace(/```.*?```/gs, '')        // 删除代码块
        .trim();
    },
    generateHighlightedDiff(originalText, modifiedText) {
      try {
        // 使用更复杂的差异比较方法
        // 将文本分成段落进行比较
        const originalParagraphs = originalText.split(/\n+/);
        const modifiedParagraphs = modifiedText.split(/\n+/);

        // 构建结果HTML
        let resultHtml = '';

        // 为每个段落创建差异比较
        const maxParagraphs = Math.max(originalParagraphs.length, modifiedParagraphs.length);
        for (let i = 0; i < maxParagraphs; i++) {
          const originalPara = i < originalParagraphs.length ? originalParagraphs[i] : '';
          const modifiedPara = i < modifiedParagraphs.length ? modifiedParagraphs[i] : '';

          if (modifiedPara) {
            // 使用中文分词进行差异比较
            const segments = this.segmentChinese(originalPara, modifiedPara);
            const highlighted = this.highlightChanges(segments.original, segments.modified);
            resultHtml += `<p>${highlighted}</p>`;
          }
        }

        return resultHtml;
      } catch (error) {
        console.error('生成差异高亮出错:', error);
        return modifiedText;
      }
    },
    segmentChinese(original, modified) {
      // 简单的中文分词方法（按句子和短语分割）
      const segmentText = (text) => {
        // 按标点符号分割
        return text.split(/([，。！？；：,.!?;:]|\s+)/g).filter(Boolean);
      };

      return {
        original: segmentText(original),
        modified: segmentText(modified)
      };
    },
    highlightChanges(originalSegments, modifiedSegments) {
      // 对每个修改后的段进行判断，如果在原文中不存在或有变化，则高亮显示
      let highlightedText = '';

      for (const segment of modifiedSegments) {
        if (segment.trim() === '') {
          highlightedText += segment;
          continue;
        }

        // 检查这个段是否在原文中存在
        const exists = originalSegments.some(origSegment =>
          origSegment.includes(segment) || segment.includes(origSegment)
        );

        // 标点符号不高亮
        const isPunctuation = /^[，。！？；：,.!?;:]+$/.test(segment);

        if (!exists && !isPunctuation && segment.length > 1) {
          // 如果段落不存在于原文中且不是标点符号，高亮显示
          highlightedText += `<span class="highlight">${segment}</span>`;
        } else {
          highlightedText += segment;
        }
      }

      return highlightedText;
    },
    copyToClipboard() {
      const textToCopy = this.outputText;
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.$message.success('已复制到剪贴板');
    },
    clearAll() {
      this.clearArticleOptimizer();
    },
    startLoadingAnimation() {
      this.loadingDots = '';
      this.loadingInterval = setInterval(() => {
        this.loadingDots = this.loadingDots.length >= 3 ? '' : this.loadingDots + '.';
      }, 500);
    },
    stopLoadingAnimation() {
      if (this.loadingInterval) {
        clearInterval(this.loadingInterval);
        this.loadingInterval = null;
      }
    }
  },
  beforeDestroy() {
    this.stopLoadingAnimation();
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.article-optimizer {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.optimizer-card {
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.input-section,
.output-section {
  margin-bottom: 20px;
}

.action-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.usage-info {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.usage-text {
  font-size: 12px;
  color: #606266;
  margin-top: 5px;
=======
/* 全局容器样式 */
.article-optimizer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* 减去顶部导航 */
  box-sizing: border-box;
  position: relative;
}

/* 欢迎区域样式 */
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

/* 标题样式 */
.welcome-section .title {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.8rem;
  letter-spacing: -0.5px;
}

/* 渐变文本效果 */
.gradient-text {
  background: linear-gradient(135deg, #409EFF, #67c23a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

/* 描述文本样式 */
.welcome-section .description {
  font-size: 1.2rem;
  color: #606266;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* 卡片样式 */
.optimizer-card {
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.optimizer-card:hover {
  box-shadow: 0 15px 50px rgba(64, 158, 255, 0.1);
  transform: translateY(-2px);
}

/* 输入区域样式 */
.input-section {
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.input-section h3 {
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
}

/* 固定高度文本框 */
.fixed-textarea {
  width: 100%;
}

.fixed-textarea>>>.el-textarea__inner {
  min-height: 280px;
  border-radius: 16px;
  border: 2px solid #e4e7ed;
  font-size: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  line-height: 1.6;
}

.fixed-textarea>>>.el-textarea__inner:hover {
  border-color: #c0c4cc;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.1);
}

.fixed-textarea>>>.el-textarea__inner:focus {
  border-color: #409EFF;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.2);
}

/* 操作区域样式 */
.action-section {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* 使用信息区域 */
.usage-info {
  background-color: rgba(245, 247, 250, 0.8);
  border-radius: 16px;
  padding: 20px 25px;
  border: 1px solid rgba(235, 238, 245, 0.8);
  backdrop-filter: blur(5px);
}

.usage-text {
  font-size: 15px;
  color: #606266;
  margin-top: 12px;
  display: block;
>>>>>>> 30d2114 (000)
}

.custom-api-text {
  color: #67c23a;
<<<<<<< HEAD
  font-weight: bold;
}

.vip-badge {
  background-color: #67c23a;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-flex;
  align-items: center;
  max-width: fit-content;
}

.vip-badge i {
  margin-right: 5px;
  font-size: 16px;
}

.api-vip-tip {
  margin: 15px 0;
}

.action-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.output-actions {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

h1 {
  color: #409EFF;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
}

h3 {
  margin-bottom: 15px;
  color: #606266;
}

.result-container {
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  position: relative;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
}

.fixed-textarea>>>.el-textarea__inner {
  resize: none !important;
  overflow-y: scroll !important;
  min-height: 250px;
  max-height: 250px;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.fixed-textarea>>>.el-textarea__inner:hover,
.fixed-textarea>>>.el-textarea__inner:focus {
  border-color: #409EFF;
}

.text-section {
  margin-bottom: 20px;
=======
  font-weight: 500;
}

/* VIP徽章样式 */
.vip-badge {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #856404;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
}

.vip-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(255, 215, 0, 0.3);
}

/* 按钮组样式 */
.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  align-items: center;
}

/* 输出区域样式 */
.output-section {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.output-section h3 {
  margin-bottom: 25px;
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
}

/* 结果容器样式 */
.result-container {
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 16px;
  padding: 25px;
  border: 1px solid rgba(235, 238, 245, 0.8);
  backdrop-filter: blur(5px);
}

/* 文本区域样式 */
.text-section {
  margin-bottom: 30px;
>>>>>>> 30d2114 (000)
}

.text-label {
  font-weight: bold;
<<<<<<< HEAD
  margin-bottom: 10px;
  color: #409EFF;
=======
  margin-bottom: 15px;
  color: #409EFF;
  font-size: 18px;
  display: block;
>>>>>>> 30d2114 (000)
}

.text-content {
  white-space: pre-wrap;
  border: 1px solid #DCDFE6;
<<<<<<< HEAD
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  line-height: 1.6;
  font-size: 14px;
  transition: box-shadow 0.3s;
}

.text-content:hover {
  box-shadow: 0 0 8px rgba(64, 158, 255, 0.1);
}

.text-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f5f7fa;
=======
  border-radius: 16px;
  padding: 25px;
  background-color: white;
  min-height: 150px;
  max-height: 400px;
  overflow-y: auto;
  line-height: 1.8;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.text-content:hover {
  box-shadow: 0 6px 20px rgba(64, 158, 255, 0.1);
  border-color: #409EFF;
  transform: translateY(-1px);
}

/* 滚动条样式 */
.text-content::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f7fa;
  border-radius: 5px;
>>>>>>> 30d2114 (000)
}

.text-content::-webkit-scrollbar-thumb {
  background-color: #c0c4cc;
<<<<<<< HEAD
  border-radius: 4px;
=======
  border-radius: 5px;
>>>>>>> 30d2114 (000)
}

.text-content::-webkit-scrollbar-thumb:hover {
  background-color: #909399;
}

<<<<<<< HEAD
:deep(.highlight) {
  background-color: #ffecb3;
  border-radius: 3px;
  padding: 0 2px;
  display: inline;
  box-shadow: 0 0 0 1px rgba(255, 193, 7, 0.3);
}

=======
/* 高亮文本样式 */
:deep(.highlight) {
  background-color: #ffecb3;
  border-radius: 4px;
  padding: 0 4px;
  display: inline;
  box-shadow: 0 0 0 1px rgba(255, 193, 7, 0.3);
  font-weight: 500;
}

/* 修改后内容样式 */
>>>>>>> 30d2114 (000)
.modified-content {
  color: #333;
}

<<<<<<< HEAD
.contact-info {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  color: #606266;
  font-size: 14px;
  border-top: 1px dashed #DCDFE6;
=======
/* 输出操作按钮组 */
.output-actions {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

/* 标题居中样式 */
.text-center {
  text-align: center !important;
}

/* 优化后的注意事项样式 */
.optimized-notice-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 0 20px;
}

.notice-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out both;
  position: relative;
  overflow: hidden;
}

.notice-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  border-radius: 16px 0 0 16px;
}

.warning-notice {
  animation-delay: 0.3s;
}

.warning-notice::before {
  background: linear-gradient(180deg, #f56c6c, #f89898);
}

.info-notice {
  animation-delay: 0.4s;
}

.info-notice::before {
  background: linear-gradient(180deg, #409eff, #66b1ff);
}

.notice-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.09);
  border-color: #e6f7ff;
}

.notice-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  transition: all 0.3s ease;
}

.warning-notice .notice-icon {
  background: linear-gradient(135deg, #fef0f0, #fff2f2);
  box-shadow: 0 4px 12px rgba(245, 108, 108, 0.15);
}

.info-notice .notice-icon {
  background: linear-gradient(135deg, #ecf5ff, #f0f8ff);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
}

.notice-card:hover .notice-icon {
  transform: scale(1.1);
}

.notice-icon i {
  font-size: 28px;
  font-weight: bold;
}

.warning-notice .notice-icon i {
  color: #f56c6c;
}

.info-notice .notice-icon i {
  color: #409eff;
}

.notice-content {
  flex: 1;
}

.notice-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #303133;
  text-align: center;
}

.warning-notice .notice-title {
  color: #f56c6c;
}

.info-notice .notice-title {
  color: #409eff;
}

.notice-text {
  font-size: 15px;
  line-height: 1.8;
  color: #606266;
  margin: 0;
  padding-right: 20px;
  position: relative;
}

/* 额外的装饰效果 */
.notice-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
}

.notice-card:hover::after {
  opacity: 1;
  transform: translate(40%, -40%);
}

/* 联系信息样式 */
.contact-info {
  text-align: center;
  margin-top: 60px;
  padding: 25px;
  color: #606266;
  font-size: 15px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  animation: fadeInUp 0.8s ease-out 0.8s both;
>>>>>>> 30d2114 (000)
}

.contact-info a {
  color: #409EFF;
  text-decoration: none;
  transition: color 0.3s;
<<<<<<< HEAD
=======
  font-weight: 500;
>>>>>>> 30d2114 (000)
}

.contact-info a:hover {
  color: #66b1ff;
  text-decoration: underline;
}

<<<<<<< HEAD
/* API设置对话框样式 */
.api-settings-dialog {
  border-radius: 8px;
}

.api-settings-dialog>>>.el-dialog__header {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #ebeef5;
}

.api-settings-dialog>>>.el-dialog__body {
  padding: 20px;
}

.api-settings-dialog>>>.el-form-item__label {
  font-weight: 500;
}

.form-tip {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
  line-height: 1.4;
}

.api-settings-footer {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.spacer {
  flex: 1;
}

.api-settings-info {
  margin-top: 25px;
=======
/* 动画效果 */
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

/* 按钮样式增强 - 与主页风格一致 */
.el-button--primary {
  border-radius: 50px !important;
  padding: 12px 36px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #409EFF, #3a8ee6) !important;
  border: none !important;
  box-shadow: 0 4px 14px rgba(64, 158, 255, 0.3);
}

.el-button--primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 20px rgba(64, 158, 255, 0.4) !important;
  background: linear-gradient(135deg, #3a8ee6, #3071a9) !important;
}

.el-button--info {
  border-radius: 50% !important;
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 20px;
}

.el-button--info:hover {
  transform: rotate(180deg);
  box-shadow: 0 6px 16px rgba(144, 147, 153, 0.3);
}

.el-button--success {
  border-radius: 50px !important;
  padding: 12px 30px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 15px;
}

.el-button--success:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(103, 194, 58, 0.3);
}

.el-button--small {
  border-radius: 25px !important;
  padding: 8px 20px !important;
  font-size: 14px !important;
}

/* 进度条样式优化 */
.el-progress {
  margin-bottom: 12px;
}

.el-progress-bar__outer {
  border-radius: 20px;
  background-color: #f3f4f6;
  height: 12px !important;
}

.el-progress-bar__inner {
  border-radius: 20px;
  transition: width 1s ease;
  height: 12px !important;
>>>>>>> 30d2114 (000)
}
</style>