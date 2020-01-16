# crimedashboard
***introduction:***
This is a web-based dashboard system for dynamic visualization of crime data and combined with spatial analysis model to reveal crime pattern. The case study is done with the crime data of city Toronto. This system is developed up on **Node.js Express framework**, the front end uses the **Bootstrap**framework to build up the interface; the base map is implemented by **Leaflet** library; the data visualization is done  by **D3.js**.
This dashboard system is mainly composed of three parts, the visualization, analysis and planning.It visualizes the data in all kind of charts and it is a responsive design, which mean user can filter the data by interacting with the map and charts elements like zooming and clicking. 
 
The spatial analysis and planning part is composed of **Moran’s I**, which analysis the spatial distribution pattern of the data set. The spatial correlation that calculate the correlation between different crime types; the **mean center** that depict the tracks of crime events in a day; the **standard division ellipse** that reveals the distribution direction of crime events; **spatial-temporal DBSCAN** to detect the crime hotspot; crime correlation to analyze the **correlation between crime and others factor** like police force position and so on.
 The backend is supported by **PostgreSQL and Amazon Storage service**. There is also multiple process applied here to make JavaScript integrate with python due to the powerful data analysis library it provides. This system also allows user to upload their own data and do analysis, which is implemented with the support of **Amazon AWS S3 cloud storage** service and PostgreSQL, for the consideration of big data, the data from user is uploaded to S3 and then goes to PostgreSQL database, and then backend side deal with the database to do the analysis. This system also contains basic routing and planning function based on the analysis results.

Main function and codes are under 'Public' and 'routes' folders

The system architecture looks like:

![System architecture]()
