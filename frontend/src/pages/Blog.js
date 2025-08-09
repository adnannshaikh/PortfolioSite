import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "My First Blog Post",
            date: "2025-08-09",
            description: "This is my very first blog post. I talk about my journey into web development.",
        },
        {
            id: 2,
            title: "Learning React & FastAPI",
            date: "2025-08-10",
            description: "Why I chose React for frontend and FastAPI for backend development.",
        }
    ];
    return (
        <Container className="mt-4">
            <h1 className="mb-4">My Blog</h1>
            <Row>
                {blogs.map((blog) => (
                    <Col md={4} key={blog.id}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{blog.date}</Card.Subtitle>
                                <Card.Text>{blog.description}</Card.Text>
                                <Card.Link href={`/blog/${blog.id}`}>Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Blog;