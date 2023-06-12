exports.getOverview = (req, res, next) => {
  res.json({
    message: 'Youth Empowerment with digital skills',
    author: 'Joseph Maina',
    year: '2023',
    for: 'Ngara-Youth-Hub',
  });
};
