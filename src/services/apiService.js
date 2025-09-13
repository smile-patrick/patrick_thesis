import axios from 'axios';

// 默认值，将被用户自定义配置覆盖
const DEFAULT_API_URL = 'https://voapi.killerbest.com';
<<<<<<< HEAD
const DEFAULT_API_KEY = 'sk-McarwsWe1KbApdcT8gkB6KmhsbNNUHvfz6C1LN7VjThovXpX'; // 替换为实际API密钥
=======
const DEFAULT_API_KEY = 'sk-3tApLUpL0kY6ddpiWc0cUFLCinzV1Q8iSREulB8v3WqTGhwc'; // 替换为实际API密钥
>>>>>>> 30d2114 (000)
const DEFAULT_MODEL_NAME = 'gpt-4.1-mini';

// 从本地存储获取API配置
export const getApiConfig = () => {
  return {
    apiUrl: localStorage.getItem('customApiUrl') || DEFAULT_API_URL,
    apiKey: localStorage.getItem('customApiKey') || DEFAULT_API_KEY,
    modelName: localStorage.getItem('customModelName') || DEFAULT_MODEL_NAME,
  };
};

// 保存API配置到本地存储
export const saveApiConfig = (apiUrl, apiKey, modelName) => {
  // 处理API地址
  if (apiUrl && apiUrl.trim()) {
    localStorage.setItem('customApiUrl', apiUrl.trim());
  } else {
    localStorage.removeItem('customApiUrl');
  }
  
  // 处理API密钥
  if (apiKey && apiKey.trim()) {
    localStorage.setItem('customApiKey', apiKey.trim());
  } else {
    localStorage.removeItem('customApiKey');
  }
  
  // 处理模型名称
  if (modelName && modelName.trim()) {
    localStorage.setItem('customModelName', modelName.trim());
  } else {
    localStorage.removeItem('customModelName');
  }
};

// 重置API配置到默认值
export const resetApiConfig = () => {
  localStorage.removeItem('customApiUrl');
  localStorage.removeItem('customApiKey');
  localStorage.removeItem('customModelName');
};

// 文章优化的完整提示词
const COMPLETE_PROMPT = `你的角色与目标：

你现在扮演一个专业的"论文（或技术文档）修改助手"。你的核心任务是接收一段中文原文（通常是技术性或学术性的描述），并将其改写成一种特定的风格。这种风格的特点是：比原文稍微啰嗦、更具解释性、措辞上更偏向通俗或口语化（但保持专业底线），并且系统性地使用特定的替代词汇和句式结构。 你的目标是精确地模仿分析得出的修改模式，生成"修改后"风格的文本，同时务必保持原文的核心技术信息、逻辑关系和事实准确性，也不要添加过多的字数。
注意不要过于口语化（通常情况下不会过于口语化，有一些比如至于xxx呢，这种的不要有）
注意！你输出的内容不应原多于原文！应时刻记得字数和原文相符！
注意！不要有''xxx呢''这种形式，如'至于vue呢'
不要第一人称
输入与输出：

输入： 一段中文原文（标记为"原文"）。
输出： 一段严格按照以下规则修改后的中文文本（标记为"修改后"）。
核心修改手法与规则（请严格遵守）：

增加冗余与解释性（Verbose Elaboration）：

动词短语扩展： 将简洁的动词或动词短语替换为更长的、带有动作过程描述的短语。
示例："管理" -> "开展...的管理工作" 或 "进行管理"
示例："交互" -> "进行交互" 或 "开展交互"
示例："配置" -> "进行配置"
示例："处理" -> "去处理...工作"
示例："恢复" -> "进行恢复"
示例："实现" -> "得以实现" 或 "来实现"
增加辅助词/结构： 在句子中添加语法上允许但非必需的词语，使句子更饱满。
示例：适当增加 "了"、"的"、"地"、"所"、"会"、"可以"、"这个"、"方面"、"当中" 等。
示例："提供功能" -> "有...功能" 或 "拥有...功能"
系统性词汇替换（Systematic Synonym/Phrasing Substitution）：

特定动词/介词/连词替换： 将原文中常用的某些词汇固定地替换为特定的替代词。这是模仿目标风格的关键。
采用 / 使用 -> 运用 / 选用 / 把...当作...来使用
基于 -> 鉴于 / 基于...来开展
利用 -> 借助 / 运用 / 凭借
通过 -> 借助 / 依靠 / 凭借
和 / 及 / 与 -> 以及 （尤其是在列举多项时）
并 -> 并且 / 还 / 同时
其 -> 它 / 其 （可根据语境选择，有时用"它"更口语化）
特定名词/形容词替换：
原因 -> 缘由 / 主要原因囊括...
符合 -> 契合
适合 -> 适宜
特点 -> 特性
提升 / 提高 -> 提高 / 提升 （可互换使用，保持多样性）
极大(地) -> 极大程度(上)
立即 -> 马上
括号内容处理（Bracket Content Integration/Removal）：

解释性括号： 对于原文中用于解释、举例或说明缩写的括号 (...) 或 （...）：
优先整合： 尝试将括号内的信息自然地融入句子，使用 "也就是"、"即"、"比如"、"像" 等引导词。
示例：ORM（对象关系映射） -> 对象关系映射即ORM 或 ORM也就是对象关系映射
示例：功能（如ORM、Admin） -> 功能，比如ORM、Admin 或 功能，像ORM、Admin等
谨慎省略： 如果整合后语句极其冗长或别扭，并且括号内容并非核心关键信息（例如，非常基础的缩写全称），可以考虑省略。但要极其小心，避免丢失重要上下文或示例。 在提供的范例中，有时示例信息被省略了，你可以模仿这一点，但要判断是否会损失过多信息。
代码/标识符旁括号： 对于紧跟在代码、文件名、类名旁的括号，通常直接移除括号。
示例：视图 (views.py) 中 -> 视图也就是views.py中
示例：权限类 (admin_panel.permissions) -> 权限类 admin_panel.permissions
句式微调与口语化倾向（Sentence Structure & Colloquial Touch）：

使用"把"字句： 在合适的场景下，倾向于使用"把"字句。
示例："会将对象移动" -> "会把对象移动"
条件句式转换： 将较书面的条件句式改为稍口语化的形式。
示例："若...，则..." -> "要是...，那就..." 或 "如果...，就..."
名词化与动词化转换： 根据需要进行调整，有时将名词性结构展开为动词性结构，反之亦然，以符合更自然的口语表达。
示例："为了将...解耦" -> "为了实现...的解耦"
增加语气词/连接词： 如在句首或句中添加"那么"、"这样"、"同时"等。
保持技术准确性（Maintain Technical Accuracy）：

绝对禁止修改： 所有的技术术语（如 Django, RESTful API, Ceph, RGW, S3, JWT, ORM, MySQL）、代码片段 (views.py, settings.py, accounts.CustomUser, .folder_marker）、库名 (Boto3, djangorestframework-simplejwt)、配置项 (CEPH_STORAGE, DATABASES)、API 路径 (/accounts/api/token/refresh/) 等必须保持原样，不得修改或错误转写。
核心逻辑不变： 修改后的句子必须表达与原文完全相同的技术逻辑、因果关系和功能描述。
执行指令：

请根据以上所有规则，对接下来提供的"原文"进行修改，生成符合上述特定风格的"修改后"文本。务必仔细揣摩每个规则的细节和示例，力求在风格上高度一致。注意不要过于口语化（通常情况下不会过于口语化，有一些比如至于xxx呢，这种的不要有）注意！你输出的内容不应原多于原文！应时刻记得字数和原文相符！注意！不要有''xxx呢''这种形式，如'至于vue呢'
不要第一人称`;

// 创建文章优化的API调用，包含重试机制
export const optimizeArticle = async (content, prompt, type, maxRetries = 3) => {
  let retries = 0;
  
  // 使用完整的提示词
  const fullPrompt = COMPLETE_PROMPT;
  
  // 获取当前的API配置
  const { apiUrl, apiKey, modelName } = getApiConfig();
  
  const makeRequest = async () => {
    try {
      console.log('开始API调用，重试次数:', retries);
      
      // 温度和top_p参数
      const temperature = 1.74;
      const top_p = 0.97;
      
      console.log('使用参数:', { 
        apiUrl,
        model: modelName, 
        temperature, 
        top_p,
        contentLength: content.length,
        typeOfOptimization: type
      });
      
      const response = await axios.post(`${apiUrl}/v1/chat/completions`, {
        model: modelName,
        messages: [
          {
            role: "system",
            content: fullPrompt
          },
          {
            role: "user",
            content: `原文：${content}`
          }
        ],
        temperature: temperature,
        top_p: top_p,
        max_tokens: 8192  // 增加最大token限制，防止截断
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      
      console.log('API调用成功，状态码:', response.status);
      
      // 提取返回文本
      const responseText = response.data.choices?.[0]?.message?.content || '';
      
      // 添加详细的响应内容日志，帮助调试
      console.log('API响应内容:', {
        hasContent: !!responseText,
        contentLength: responseText.length,
        contentPreview: responseText.substring(0, 100) + (responseText.length > 100 ? '...' : ''),
        fullResponse: response.data
      });
      
      // 移除短文本检查，避免因文本长度限制而重试
      return {
        text: responseText || '内容优化服务暂时不可用，请稍后重试'
      };
    } catch (error) {
      console.error(`API调用错误(尝试 ${retries+1}/${maxRetries}):`, error);
      
      if (error.response) {
        console.error('错误状态码:', error.response.status);
        console.error('错误响应数据:', error.response.data);
      }
      
      if (retries < maxRetries - 1) {
        retries++;
        console.log(`正在重试(${retries}/${maxRetries})...`);
        
        // 错误后休眠一段时间再重试
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return await makeRequest(); // 递归重试
      }
      
      // 所有重试都失败时，返回错误信息而不是抛出异常
      return {
        text: `无法连接AI服务: ${error.message}${error.response ? ' - 状态码: ' + error.response.status : ''}`,
        error: true
      };
    }
  };
  
  return await makeRequest();
}; 