/**
 * 現在時刻の3ヶ月前から５年間の間のランダムな年月日を選び、そこから1ヶ月後の年月日のUNIXタイムスタンプを返します
 */

export const getRandomDateRange = (): { from: number; to: number } => {
  const beforeLatestMonth = 3;
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - beforeLatestMonth);
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
  const startDate = fiveYearsAgo;
  const endDate = threeMonthsAgo;

  // startDateからendDateの間のランダムな日時を生成
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  const fromTimestamp = Math.floor(randomDate.getTime() / 1000);
  const toDate = new Date(randomDate);
  toDate.setMonth(toDate.getMonth() + 1);
  const toTimestamp = Math.floor(toDate.getTime() / 1000);

  return { from: fromTimestamp, to: toTimestamp };
};
