import json
from fpdf import FPDF

def filter_issues_by_severity(issues, severities):
    return [issue for issue in issues if issue['severity'] in severities]

def create_pdf_report(filtered_issues, output_file):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size = 12)

    # Title
    pdf.cell(200, 10, txt = "SonarQube Report - Filtered Issues", ln = True, align = 'C')

    # Header
    pdf.set_font("Arial", 'B', 12)
    pdf.cell(200, 10, txt = "Issues", ln = True, align = 'L')
    pdf.ln(10)

    # Content
    pdf.set_font("Arial", size = 12)
    for issue in filtered_issues:
        pdf.cell(200, 10, txt = f"Key: {issue['key']}", ln = True)
        pdf.cell(200, 10, txt = f"Rule: {issue['rule']}", ln = True)
        pdf.cell(200, 10, txt = f"Severity: {issue['severity']}", ln = True)
        pdf.cell(200, 10, txt = f"Component: {issue['component']}", ln = True)
        pdf.cell(200, 10, txt = f"Line: {issue['line'] if 'line' in issue else 'N/A'}", ln = True)
        pdf.cell(200, 10, txt = f"Message: {issue['message']}", ln = True)
        pdf.cell(200, 10, txt = "---------------------------", ln = True)

    pdf.output(output_file)

def main():
    # Load JSON data
    with open('sonar-issues.json') as f:
        data = json.load(f)

    # Filter issues by severity
    severities = ["BLOCKER", "MAJOR", "CRITICAL"]
    filtered_issues = filter_issues_by_severity(data['issues'], severities)

    # Create PDF report
    create_pdf_report(filtered_issues, 'filtered_sonar_report.pdf')

if __name__ == "__main__":
    main()
