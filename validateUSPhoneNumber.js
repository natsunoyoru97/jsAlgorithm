function telephoneCheck(str) {
  if (str.length === 14 && str.charAt(0) !== '1') {
		return false;
	}
	return  (/^1?\s?(\d{3})-?\s?(\d{3})-?\s?(\d{4})$/g.test(str) || /^1?\s?\((\d{3})-?\)\s?(\d{3})-?\s?(\d{4})$/g.test(str));
}