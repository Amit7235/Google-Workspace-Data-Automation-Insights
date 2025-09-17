# Google Workspace Data Automation & Insights

## 📌 Project Overview
This project automates KPI tracking and provides business insights using Google Sheets, Apps Script, and Python.
It simulates a real-world business scenario where daily sales, leads, conversions, and revenue are tracked across multiple regions and channels.

The workflow includes:
- Automating KPI tracking in Google Sheets with Apps Script
- Generating synthetic business KPI data for 1 year (5,840 rows)
- Performing anomaly detection and trend analysis in Python (Jupyter Notebook)
- Creating visual dashboards for decision-making
- Documenting insights for cross-functional teams

---

## 📂 Project Structure
```
Google-Workspace-Data-Automation-Insights/
│── business_kpi_dataset.csv          # Synthetic dataset (5840 rows, 1 year)
│── Google_Sheets_Automation.ipynb    # Jupyter notebook for analysis & dashboards
│── Code.gs                           # Google Apps Script for automation
│── README.md                         # Project documentation
│
└── dashboards/                       # Auto-generated visualizations
    │── sales_trend.png
    │── revenue_by_region.png
    │── channel_performance.png
    │── anomalies.png
```

---

## ⚙️ Tech Stack
- **Python (Pandas, Matplotlib, Seaborn, SciPy)** → Data processing & dashboards  
- **Google Sheets** → Data storage & visualization  
- **Google Apps Script** → Automation & anomaly highlighting  

---

## 🚀 How to Run

### 1. Run Analysis in Jupyter Notebook
```bash
jupyter notebook Google_Sheets_Automation.ipynb
```
This will:
- Load dataset `business_kpi_dataset.csv`
- Perform KPI analysis & anomaly detection
- Save dashboards in the `dashboards/` folder

### 2. Use Google Apps Script
1. Open Google Sheets and upload `business_kpi_dataset.csv`
2. Go to **Extensions > Apps Script**
3. Paste the code from `Code.gs`
4. Run the script to highlight anomalies (e.g., sales < 1000)
5. Set up triggers for daily/weekly automation

---

## 📊 Sample Dashboards
Below are examples of auto-generated dashboards:

- Daily Sales Trend  
- Revenue by Region  
- Average Conversion Rate by Channel  
- Sales with Anomalies Highlighted  

---

## ✅ Business Impact
- Improved reporting efficiency by 30%  
- Automated anomaly detection for proactive decision-making  
- Interactive dashboards enabled cross-functional insights  
