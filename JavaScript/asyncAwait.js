const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("selecting img");
      resolve("img");
    }, 4000);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("filtered img");
      resolve("filtered img");
    }, 3000);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("filtered img with caption");
      resolve("filtered img with caption");
    }, 2000);
  });
};

const step4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("final img");
      resolve();
    }, 1000);
  });
};

async function fun(){
    await step1();
    await step2();
    await step3();
    await step4();
}
fun();