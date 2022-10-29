def check_color_hex(color_code):
	"""
	Check the validity of the hexadecimal code of various node and edge color
	related attributes.

	This function returns an error if the hexadecimal code is not of the format
	'#XXX' or '#XXXXXX', i.e. hexadecimal color code is not valid.

	:param color_code: color code
	"""
	# if color name is given instead of hex code, no need to check its validity
	if not color_code.startswith('#'):
		return ""
	valid = re.search(r'^#(?:[0-9a-fA-F]{3}){1,2}$', color_code)
	if valid is None:
		return color_code + ' is not a valid hex color code.'
	else:
		return "" 
