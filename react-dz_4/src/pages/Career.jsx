import React from 'react';

const CareerPage = () => {
    return (
        <table className="CareerInfo">
            <caption>Currently we are looking for</caption>
            <tbody>
                <tr>
                    <td>Front-end developer</td>
                    <td>
                        <ul>
                            <li>- Strong experience with HTML5, CSS3</li>
                            <li>- Deep knowledge of JavaScript</li>
                            <li>- Experience in Responsive Web Design</li>
                            <li>- Experience with Git</li>
                            <li>- Fluent in English both spoken and written</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Back-end developer</td>
                    <td>
                        <ul>
                            <li>- Understanding accessibility and security compliance</li>
                            <li>- User authentication and authorization between multiple systems and environments</li>
                            <li>- Integration of multiple data sources and databases into one system</li>
                            <li>- Data migration, transformation, and scripting</li>
                            <li>- Setup and administration of backups</li>
                            <li>- Proficient understanding of code versioning tools, such as Git</li>
                            <li>- Fluent in English both spoken and written</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>);
}

export default CareerPage;