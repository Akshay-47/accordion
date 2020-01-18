import data from "./dummyData";

async function asyncWait(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
}

const getData = async () => {
  await asyncWait(2000);
  return data;
};

export default getData;
