import { useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import './search.scss';

const Search = ({ onHandleSearch }) => {

	const textInput = useRef();

	/**
	 * Method to handle clear search term in search input
	 */
	const clearSearchTerm = () => {
		textInput.current.value = "";
		onHandleSearch('');
	}

	/**
	 * Method to handle onKeyDown event to capture search value when typing
	 * @param {*} e 
	 */
	const onSearch = (e) => {
		onHandleSearch(e.target.value);
	}
	return (
		<div className="cmp-search">
			<Container>
				<Row>
					<Col md={3}>
						<div className="search">
							<Form.Control type="text" placeholder="Search" ref={textInput} className="search-box" onKeyDown={(e) => {
								(e.keyCode || e.which) === 13 && onSearch(e)
							}
							} />
							<div className="clear-icon" onClick={clearSearchTerm}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
								</svg>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Search;