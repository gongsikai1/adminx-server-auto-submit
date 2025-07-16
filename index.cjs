const { createWorker } = require('tesseract.js');
const axios = require('axios');
const sleepUtils = require('sleep')
const { sleep: sleepInfo } = sleepUtils;

const sleep = (seconds) => {
  sleepInfo(10)
}

(async () => {
  const run = async (username, password) => {
    
    let token = '';

    // 登录
    const setTokenPromise = async (username, password) => {
      // 识别验证码
      sleep(1)
      const result = await axios.get('http://115.190.9.242/api/auth/captcha')
      let base64Image = 'data:image/png;base64,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'; // ← 填入你的Base64数据
      base64Image = result.data.data.captchaImageBase64
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      const worker = await createWorker('eng');
      const ret = await worker.recognize(buffer);
      console.log('captchaId: ', result.data.data.captchaId);
      console.log('result: ', ret.data.text);
      await worker.terminate();

      // const username = 'oqmmz2b22t@zvvzuv.com';
      // const password = 'oqmmz2b22t@zvvzuv.comA';
      sleep(1)
      const res = await fetch("http://115.190.9.242/api/auth/login", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/json;charset=UTF-8",
          "pragma": "no-cache",
          "proxy-connection": "keep-alive",
          "Referer": "http://115.190.9.242/login?redirect=/home",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{\"username\":\"${username}\",\"password\":\"${password}\",\"captchaId\":\"${result.data.data.captchaId}\",\"code\":\"${ret.data.text.replace(/\s+/g, '')}\"}`,
        "method": "POST"
      });

      return new Promise( async (resolve, reject) => {
        
        
        if (res.status !== 200) {
          // if (res.status === 401) {
          // await setTokenPromise(username, password);
          // }
          reject(res);
          return;
        }
        res.json().then(async data => {
          if (data.code !== 200) {
            let token = '';
            if (data.code === 500) {
              while (!token) {
                const newToken = await setTokenPromise(username, password);
                console.log('newToken: ', newToken);
                token = newToken;
              }
            }
            if (token) {
              console.log('login success: ', token);
              resolve(token);
            }
            else {
              console.log('login failed: ', data);
              reject(data);
            }
            return;
          }
          token = data.data.token;
          // const data = await res.json();
          console.log('login token: ', token);
          // console.log('login response: ', data);
          console.log('login status: ', res.status);
          resolve(token);
        }).catch(err => {
          reject(err);
        });
      });
    }

    const setToken = async (username, password) => {
      try {
        token = await setTokenPromise(username, password)
      } catch (e) {
        console.error('Error during login:', e);
      }
    }

    while (!token) {
      await setToken(username, password);
    }
    

    // 发表文章
    const submitArticle = async () => {
      const article = async () => {
        sleep(1)
        const res = await fetch("http://115.190.9.242/api/article/save", {
          "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "content-type": "application/json;charset=UTF-8",
            "pragma": "no-cache",
            "proxy-connection": "keep-alive",
            "Referer": "http://115.190.9.242/article/manage",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": `{\"title\":\"${Math.random()}\",\"categoryId\":15,\"content\":\"${Math.random()}\"}`,
          "method": "POST"
        });
        return new Promise(async (resolve, reject) => {
          if (res.status !== 200) {
            if (res.status === 401) {
              await setToken(username, password);
            }
            reject(res);
            return;
          }
          res.json().then(data => {
            if (data.code !== 200) {
              console.log('article failed: ', data);
              reject(data);
            } else {
              // console.log('article response: ', data);
              console.log('article success: ', data);
              resolve(data);
            }
          }).catch(err => {
            // console.error('Error parsing JSON:', err);
            reject(err);
          });
        });
      }
      // const articleRes = await article()
      for (let i = 0; i < 50; i++) {
        console.log('Creating article', i + 1);
        try {
          await article();
          console.log('Article created successfully', i + 1);
        } catch (e) {
          // console.error('Error in article creation:', e);
          console.log('Article creation failed', i + 1);
        }
      }
      return new Promise((resolve) => {
        resolve();
      });
    }

    await submitArticle()
    
    // 新增分类

    const addCategory = async () => {
      const category = async () => {
        sleep(1)
        const res = await fetch("http://115.190.9.242/api/article/category/saveUpdate", {
          "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "content-type": "application/json;charset=UTF-8",
            "pragma": "no-cache",
            "proxy-connection": "keep-alive",
            "Referer": "http://115.190.9.242/article/category",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": `{\"categoryName\":\"${Math.random()}\"}`,
          "method": "POST"
        });
        return new Promise(async (resolve, reject) => {
          if (res.status !== 200) {
            if (res.status === 401) {
              await setToken(username, password);
            }
            reject(res);
            return;
          }
          res.json().then(data => {
            if (data.code !== 200) {
              console.log('category failed: ', data);
              reject(data);
            } else {
              // console.log('category response: ', data);
              console.log('category success: ', data);
              resolve(data);
            }
          }).catch(err => {
            // console.error('Error parsing JSON:', err);
            reject(err);
          });
        });
      }
      // const categoryRes = await category()
      for (let i = 0; i < 3; i++) {
        console.log('Creating category', i + 1);
        try {
          await category();
          console.log('Category created successfully', i + 1);
        } catch (e) {
          console.log('Category creation failed', i + 1);
          // console.error('Error in category creation:', e);
        }
      }
      return new Promise((resolve) => {
        resolve();
      });
    }

    await addCategory()

    // 新增评论

    const addComment = async () => {
      const articleList = async () => {
        sleep(1)
        const res = await await fetch("http://115.190.9.242/api/article/page?size=10000&current=1&title=", {
          "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "proxy-connection": "keep-alive",
            "Referer": "http://115.190.9.242/article/manage",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": null,
          "method": "GET"
        });
        return new Promise(async (resolve, reject) => {
          if (res.status !== 200) {
            if (res.status === 401) {
              await setToken(username, password);
            }
            reject(res);
            return;
          }
          res.json().then(data => {
            if (data.code !== 200) {
              console.log('articleList failed: ', data);
              reject(data);
            } else {
              // console.log('articleList response: ', data);
              console.log('articleList success: ', data);
              resolve(data);
            }
          }).catch(err => {
            // console.error('Error parsing JSON:', err);
            reject(err);
          });
        });
      }

      const postComment = async (articleId) => {
        sleep(1)
        const res = await fetch("http://115.190.9.242/api/comment/save", {
          "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "authorization": `Bearer ${token}`,
            "cache-control": "no-cache",
            "content-type": "application/json;charset=UTF-8",
            "pragma": "no-cache",
            "proxy-connection": "keep-alive",
            "Referer": `http://115.190.9.242/article/detail/${articleId}`,
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": JSON.stringify({
            articleId,
            // content: Math.random().toString(36).substring(2, 15) + ' ' + Math.random().toString(36).substring(2, 15)
            content: Math.random()
          }),
          "method": "POST"
        });
        return new Promise(async (resolve, reject) => {
          if (res.status !== 200) {
            if (res.status === 401) {
              await setToken(username, password);
            }
            reject(res);
            return;
          }
          res.json().then(data => {
            if (data.code !== 200) {
              console.log('articleList failed: ', data);
              reject(data);
            } else {
              // console.log('articleList response: ', data);
              console.log('articleList success: ', data);
              resolve(data);
            }
          }).catch(err => {
            console.error('Error parsing JSON:', err);
            reject(err);
          });
        });
      }

      const articleListInfo = await articleList();
      if (articleListInfo.code === 200) {
        const list = articleListInfo.data.records;
        for (let i = 0; i < list.length; i++) {
          const article = list[i];
          // Do something with each article
          const articleId = article.articleId;
          console.log(`Processing article ID: ${articleId}`);

          for (let i = 0; i < 50; i++) {
            console.log('Creating comment', i + 1);
            try {
              await postComment(articleId);
              console.log('Comment created successfully', i + 1);
            } catch (e) {
              console.log('Comment creation failed', i + 1, e);
              // console.error('Error in category creation:', e);
            }
          }

          
        }
      }
      console.log('articleListInfo: ', articleListInfo);
      return new Promise((resolve) => {
        resolve();
      });
    }

    await addComment()

  }

  
  for (const account of require('./accountList.js').list.reverse()) {
    const username = account.account;
    const password = account.password;
    console.log('Processing account:', username);
    await run(username, password);
  }

  // await run()

})();