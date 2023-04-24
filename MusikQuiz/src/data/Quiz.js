import { getGenre } from "./retriveData";
export { getQuizQuestions, getFour }

/* const songs = [] */

async function getQuizQuestions(id, startDate, endDate) {

  let quizList = await getGenre(id, startDate, endDate)
  /* console.log(this.genre) */
  
  return getFour(quizList)

}

function getFour(quizList) {

  const random = quizList.sort(() => 0.5 - Math.random())
  quizList = random.slice(0, 4)

  return quizList
}

