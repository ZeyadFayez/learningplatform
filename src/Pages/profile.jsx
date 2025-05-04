import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../Component/header';
import Footer from '../Component/footer';

const useHoverStyle = () => {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        backgroundColor: isHovered ? '#588157' : '#344E41',
        color: 'white',
        border: 'none',
        padding: '10px 26px',
        fontSize: 15,
        fontWeight: 600,
        borderRadius: 6,
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    };

    const eventHandlers = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    };

    return { style, eventHandlers };
};

const HoverButton = ({ children, onClick, style }) => {
    const { style: hoverStyle, eventHandlers } = useHoverStyle();
    return (
        <button style={{ ...hoverStyle, ...style }} onClick={onClick} {...eventHandlers}>
            {children}
        </button>
    );
};

const DropdownLink = ({ href, children }) => {
    const [hover, setHover] = useState(false);
    const linkStyle = {
        color: 'white',
        padding: '13px 20px',
        textDecoration: 'none',
        display: 'block',
        borderBottom: '1px solid #4f634f',
        fontSize: 14,
        backgroundColor: hover ? '#588157' : '#344E41',
        transition: 'background-color 0.3s ease',
    };

    return (
        <a
            href={href}
            style={linkStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </a>
    );
};

const Profile = () => {
    const [showCompletedDropdown, setShowCompletedDropdown] = useState(false);
    const [showCourses, setShowCourses] = useState(false);
    const [showEditOptions, setShowEditOptions] = useState(false);
    const [visibleOptions, setVisibleOptions] = useState(0);
    const [visibleDropdown, setVisibleDropdown] = useState(0);

    const toggleCompletedDropdown = () => {
        if (!showCompletedDropdown) {
            setVisibleDropdown(0);
            [1, 2, 3, 4, 5].forEach((option, index) => {
                setTimeout(() => setVisibleDropdown((prev) => prev + 1), index * 200);
            });
        }
        setShowCompletedDropdown((prev) => !prev);
    };

    const toggleEditOptions = () => {
        setShowEditOptions(!showEditOptions);
        if (!showEditOptions) {
            setVisibleOptions(0);
            [1, 2, 3].forEach((option, index) => {
                setTimeout(() => setVisibleOptions((prev) => prev + 1), index * 300);
            });
        }
    };

    useEffect(() => {
        setShowCourses(true);
    }, []);

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif', backgroundColor: '#A3B18A', margin: 0,
            padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'flex-start', height: '100vh', position: 'relative'
        }}>
            <div style={{ width: '100%' }}>
                <Header />
            </div>

            <div style={{ marginTop: 20, width: '30%', textAlign: 'center' }}>
                <input
                    type="text"
                    placeholder="Search for course..."
                    style={{
                        padding: '8px 12px',
                        borderRadius: 6,
                        border: 'none',
                        width: '100%',
                        fontSize: 14,
                        color: '#333',
                        backgroundColor: 'white',
                    }}
                />
            </div>

            <div style={{ width: '100%', height: 10, backgroundColor: '#3A5A40', marginTop: 20 }}></div>

            <div style={{
                width: 200, height: 200, border: '2px dashed #f0e8e8', backgroundColor: '#f1ecec',
                display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold',
                color: '#3A5A40', textAlign: 'center', position: 'relative', marginTop: 20
            }}>
                <FaUserCircle style={{ fontSize: 150, color: '#3A5A40' }} />
            </div>

            <div style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>
                <p><strong>Username:</strong> seifelalami</p>
                <p><strong>ID:</strong> 236459</p>
                <HoverButton onClick={toggleEditOptions}>Edit Profile</HoverButton>

                {showEditOptions && (
                    <div style={{ marginTop: 10, textAlign: 'center' }}>
                        <HoverButton
                            style={{
                                opacity: visibleOptions > 0 ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        >
                            Change Profile Picture
                        </HoverButton>
                        <HoverButton
                            style={{
                                opacity: visibleOptions > 1 ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        >
                            Change Username
                        </HoverButton>
                        <HoverButton
                            style={{
                                opacity: visibleOptions > 2 ? 1 : 0,
                                transition: 'opacity 0.5s ease',
                            }}
                        >
                            Switch Email Address
                        </HoverButton>
                    </div>
                )}

                <div style={{ marginTop: 20 }}>
                    <label htmlFor="email" style={{ fontWeight: 'bold', color: '#344E41' }}>Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value="seifelalami@example.com"
                        readOnly
                        style={{
                            width: '80%', padding: 10, marginTop: 5, border: '1px solid #ddd',
                            borderRadius: 6, fontSize: 16, backgroundColor: '#f1ecec', color: '#333'
                        }}
                    />
                </div>
            </div>

            <div style={{ width: '40%', height: 1, backgroundColor: '#344E41', margin: '10px 0' }}></div>

            <div style={{
                width: '30%', textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 400,
                backgroundColor: '#344E41', padding: 10, borderRadius: 4
            }}>
                <p><strong>About Me:</strong></p>
                <p><strong>Description:</strong> User has not updated their description yet</p>
                <p><strong>Interests:</strong> User has not updated their interests yet.</p>
            </div>

            <div style={{ position: 'absolute', top: 90, left: 20, zIndex: 1000 }}>
                <HoverButton onClick={toggleCompletedDropdown}>Completed Courses</HoverButton>
                {showCompletedDropdown && (
                    <div style={{
                        position: 'absolute',
                        backgroundColor: '#344E41',
                        marginTop: 10,
                        borderRadius: 6,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        minWidth: 300,
                        padding: '10px',
                    }}>
                        {visibleDropdown > 0 && <DropdownLink href="#">IS</DropdownLink>}
                        {visibleDropdown > 1 && <DropdownLink href="#">SE</DropdownLink>}
                        {visibleDropdown > 2 && <DropdownLink href="#">Embedded Systems</DropdownLink>}
                        {visibleDropdown > 3 && <DropdownLink href="#">C++ Basics</DropdownLink>}
                        {visibleDropdown > 4 && <DropdownLink href="#">Problem Solving</DropdownLink>}
                    </div>
                )}
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: 100,
                    left: 20,
                    backgroundColor: '#3A5A40',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '30%',
                    padding: '20px',
                    borderRadius: 6,
                    opacity: showCourses ? 1 : 0,
                    transform: showCourses ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
                }}
            >
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={tableHeader}>Enrolled Courses</th>
                            <th style={tableHeader}>Study Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={courseCellGreen}>Intro to Python</td>
                            <td style={linkCell}><a href="253ENG3.html" style={linkStyle}>Go to Subject</a></td>
                        </tr>
                        <tr>
                            <td style={courseCellGreen}>Advanced CSS</td>
                            <td style={linkCell}><a href="375PHY5.html" style={linkStyle}>Go to Subject</a></td>
                        </tr>
                        <tr>
                            <td style={courseCellGreen}>Node.js</td>
                            <td style={linkCell}><a href="526IS65.html" style={linkStyle}>Go to Subject</a></td>
                        </tr>
                        <tr>
                            <td style={courseCellGreen}>UIUX</td>
                            <td style={linkCell}><a href="5643MA7.html" style={linkStyle}>Go to Subject</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    );
};

const tableHeader = {
    backgroundColor: '#344E41',
    color: 'rgb(197, 197, 197)',
    fontWeight: 600,
    border: '1px solid #ddd',
    padding: 10
};

const courseCellGreen = {
    backgroundColor: '#3A5A40',
    color: 'white',
    border: '1px solid #ddd',
    padding: 10
};

const linkCell = {
    backgroundColor: '#3A5A40',
    border: '1px solid #ddd',
    padding: 10
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
};

export default Profile;
