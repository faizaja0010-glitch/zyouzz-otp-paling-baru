export const success = (res, message, data = null) => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const error = (res, message, code = 400) => {
  return res.status(code).json({
    success: false,
    message,
  });
};
