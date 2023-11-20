const formattedUrl = (url: string) =>
  url && `(${new URL(url).hostname.replace('www.', '')})`;

const formattedTime = (time: number) => {
  const numberOfHours = Math.floor(
    (Date.now() - new Date(time * 1000).getTime()) / 1000 / 60 / 60
  );
  return `${numberOfHours} ${numberOfHours > 1 ? 'hours' : 'hour'} ago`;
};

export { formattedUrl, formattedTime };
