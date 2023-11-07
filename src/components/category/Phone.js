import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Phone() {
    const [smartphone, setSmartphone] = useState([]);
    const [filteredSmartphone, setFilteredSmartphone] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [brands, setBrands] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeSort, setActiveSort] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const smResponse = await axios.get("http://localhost:9999/product?categoryId=1");
                const brandResponse = await axios.get("http://localhost:9999/brand")
                setSmartphone(smResponse.data);
                setBrands(brandResponse.data);
                setFilteredSmartphone(smResponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    function formatPrice(price) {
        price = (price + "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        price = price + " VND";

        return price;
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filterProducts = (brandId) => {
        setSelectedBrand(brandId);
        if (brandId === '') {
            setFilteredSmartphone(smartphone);
        } else {
            const filteredProducts = smartphone.filter(product => product.brandId === parseInt(brandId));
            setFilteredSmartphone(filteredProducts);
        }
        setActiveFilter(brandId);
    };
    const sortProducts = (order) => {
        const sortedProducts = [...filteredSmartphone];
        sortedProducts.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            if (order === "asc") {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });
        setFilteredSmartphone(sortedProducts);
        setActiveSort(order);
    };
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredSmartphone.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <Container style={{ marginTop: '30px' }}>
                <Row style={{ display: 'flex', justifyContent: 'left' }}>
                    <Col><Button onClick={() => filterProducts('')} style={{
                        backgroundColor: "rgb(220, 100, 11)",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "14px",
                    }} variant="outline-warning">Tất cả</Button></Col>
                    {brands.filter(b => b.id < 6).map((brand) => (
                        <Col key={brand.id}>
                            <Button
                                onClick={() => filterProducts(brand.id)}
                                style={{
                                    backgroundColor: "rgb(220, 100, 11)",
                                    color: "white",
                                    fontWeight: "bolder",
                                    fontSize: "14px",
                                }}
                                variant={activeFilter === brand.id ? "dark" : "outline-warning"}
                            >
                                {brand.name}
                            </Button>
                        </Col>
                    ))}
                </Row>
                <div style={{ marginTop: '30px' }}>
                    <Button onClick={() => sortProducts("asc")} style={{
                        backgroundColor: "rgb(220, 100, 11)",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "14px",
                    }} variant={activeSort === "asc" ? "dark" : "outline-warning"}>Sắp xếp tăng dần</Button>
                    <Button onClick={() => sortProducts("desc")} style={{
                        backgroundColor: "rgb(220, 100, 11)",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "14px",
                    }} variant={activeSort === "desc" ? "dark" : "outline-warning"}>Sắp xếp giảm dần</Button>
                </div>
                <Row>
                    {currentProducts.map(filteredProduct => (
                        <Col key={filteredProduct.id} xs={12} sm={6} md={3} style={{ marginTop: '15px' }}>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Img style={{ height: '290px' }} src={filteredProduct.img} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: 'center' }}>{filteredProduct.name}</Card.Title>
                                    <Card.Text>
                                        <Row>
                                            <Col>{formatPrice(filteredProduct.price)}</Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}><Link to={`/product/detail/${filteredProduct.id}`}><Button style={{
                                                backgroundColor: 'rgb(220, 100, 11)',
                                                color: 'white', fontWeight: 'bolder', fontSize: '14px'
                                            }} variant="outline-warning">Detail</Button></Link></Col>
                                            <Col md={6}><Button style={{
                                                backgroundColor: 'rgb(220, 100, 11)',
                                                color: 'white', fontWeight: 'bolder', fontSize: '14px'
                                            }} variant="outline-warning">Add To Cart</Button></Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(filteredSmartphone.length / productsPerPage) }).map((_, index) => (
                            <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                <button onClick={() => paginate(index + 1)} className="page-link">
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </Row>
            </Container>
        </div>
    );
}