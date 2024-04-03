const TextSimilarityTool = require('text-similarity-tool'); 
  
class TextSimilarityCalculator {  
  constructor() {  
    this.similarityTool = new TextSimilarityTool(); // 初始化文本相似度工具  
  }  
  
  // 计算两段文本之间的相似度  
  calculateSimilarity(text1, text2) {  
    if (!text1 || !text2) {  
      throw new Error('Both text inputs are required.');  
    }  
    return this.similarityTool.calculateSimilarity(text1, text2); // 调用相似度计算函数  
  }  
}  
  
// 导出TextSimilarityCalculator类，以便在其他文件中使用  
module.exports = TextSimilarityCalculator;