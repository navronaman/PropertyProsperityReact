import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div className='info-center'>
        <header>
            <h1 style={{textAlign: 'center'}}>How to know what the best for you?</h1>        
        </header>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Check for Price history</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Examining the price history of properties in a particular area can
            reveal trends over time. You can identify whether prices are
            generally rising, falling, or remaining stable. This information
            helps you understand the market's behavior and predict future price
            movements. By comparing the price history of similar properties, you
            can assess whether a specific listing is priced competitively. If
            similar properties have sold for lower prices in the past, it may
            indicate that the current listing is overpriced, providing leverage
            for negotiation. Price history can also help you mitigate risks
            associated with real estate investment. For example, if you notice a
            pattern of fluctuating prices in a particular area, you can factor
            that volatility into your investment strategy and make more informed
            decisions to minimize potential losses.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Look for Mortgage rates of the properties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The mortgage value of a property refers to the amount of money that 
          a lender is willing to loan to a borrower based on the appraised 
          value of the property and the borrower's financial circumstances. 
          Lower mortgage rates mean lower monthly mortgage payments, which can
            make homeownership more affordable. When mortgage rates are low,
            buyers can typically afford more expensive properties without
            significantly increasing their monthly housing expenses. Lower
            mortgage rates increase buyers' purchasing power, allowing them to
            qualify for larger loan amounts. This expanded buying power enables
            buyers to consider a broader range of properties and potentially
            purchase a home that better meets their needs and preferences.
            Monitoring mortgage rates can help buyers identify opportune times
            to enter the real estate market. When rates are low, buyers may be
            able to secure more favorable financing terms, making it an
            advantageous time to buy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Find out the Return of Investment of that Property</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Calculating the Return on Investment (ROI) for a real estate
            property involves analyzing the income generated from the property
            against the initial investment and ongoing expenses.Analyzing the
            ROI helps you evaluate the risk associated with each property.
            Properties with higher ROI typically offer better returns but may
            also come with higher risk factors such as location, condition, or
            market volatility. Understanding the balance between risk and return
            allows you to make more informed decisions about which property
            aligns best with your risk tolerance and investment strategy.
            Ultimately, ROI serves as a quantitative measure to guide your
            decision-making process when selecting a property to purchase. It
            provides a clear and objective criterion for evaluating different
            investment opportunities, allowing you to focus on properties that
            offer the greatest potential for profitability and long-term growth.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Ponder upon Price per Square Feet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Price per square foot is a commonly used metric in real estate to
            compare the relative value of properties based on their size. It
            represents the price of a property divided by its total square
            footage. Appraisers often use price per square foot data as a
            benchmark when valuing properties. They compare the subject
            property's price per square foot to similar properties in the area
            to determine its fair market value. Buyers can use price per square
            foot data to estimate the cost of purchasing a property based on its
            size. This helps them budget and plan for their real estate purchase
            accordingly.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}