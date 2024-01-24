function formatErrorMessage(errorResponse: any) {
  if (Array.isArray(errorResponse.message)) {
    return errorResponse.message.join(', ');
  }
  return errorResponse.message;
}

export function handleAsyncThunkError(error: any, rejectWithValue: Function) {
  if (error.response && error.response.data) {
    const formattedMessage = formatErrorMessage(error.response.data);
    return rejectWithValue(formattedMessage);
  } else {
    return rejectWithValue(`An unknown error occurred, ${error}`);
  }
}
