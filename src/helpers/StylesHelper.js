// eslint-disable-next-line import/prefer-default-export
export const getStyleAccordingToDirectionForText = (isRTL) => ({
  writingDirection: isRTL ? 'rtl' : 'ltr',
})

export const getStyleAccordingToDirectionForTextInput = (isRTL) => ({
  writingDirection: isRTL ? 'rtl' : 'ltr',
  textAlign: isRTL ? 'right' : 'left',
})
