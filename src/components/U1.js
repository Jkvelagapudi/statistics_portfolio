import React from 'react';
import './U1.css'

function U1() {
  return (
    <>
    <div className="unitOne">
        <h1 className="title"> Unit 1 portfolio </h1>

        <div className="terms">
          <h2> Statistics Terms To Know</h2>
            <li> Statistics - The science of collecting, analyzing, and drawing conclusions from data </li>
            <li> Population - The entire collection of individuals or objects about which information is desired </li>
            <li> Census - Perfomed to gather information about the entire population </li>
            <li> Sample - A subset of the population randomly selected for study in a defined manner </li>
            <li> Parameter - Fixed value about a population; Typically unknown; Calculated using census data </li>
            <li> Statistic (NOT STATISTICS) - Value calculated from a sample; Used to calculate parameter </li>
            <li> Resistant - When a statistic is not affected by outliers (it resists the affects of outliers) </li>
        </div>

        <div className="central">
          <h2> Measures of Central Tendency </h2>
            <li> Median - The middle of the data; 50th percentile (Formula is (n+1)/2 where n is sample size) </li>
            <li> Mean - The arithmetic average; μ is population mean (Population) and X̅ is sample mean (Statistic); Formula is (∑x)/n where n is sample size </li>
            <li> Mode - The observation that occurs the most often; Can be more than one mode; Not as useful as Mean or Median </li>
        </div>

        <div className="types">
          <h2> Types of Statistics </h2>
          <li> Descriptive Statistics - The method of organizing and summarizing data </li>
          <li> Infrential Statistics - Involves making generalizations from a sample to a population </li>
        </div>

        <div className="data">
          <h2> Types of Data </h2>
          <li> Categorical Data (Qualitative) - Data is sorted into “categories” that have no meaningful numerical value </li>
          <li> Numerical Data (Quantitative) - Observations or measurements take on numerical values; Makes sense to average these values </li>
        </div>

        <div className="numerical">
          <h2> Types of Numerical Data </h2>
          <li> Discrete Numerical - Data can only take on specific values in the domain of the variable; Usually counts of items </li>
          <li> Continuous Numerical - Data can take on any values in the domain of the variable; Usually measurements of something </li>
        </div>

        <div className="variables">
          <h2> Types of Data </h2>
          <li> Univariate - Data that describes a single characteristic of the population </li>
          <li> Bivariate - Data that describes two characteristics of the population </li>
          <li> Multivariate - Data that describes more than two characteristics </li>
        </div>

        <div className="categorical-graphs">

          <div className="bar-graph">
            <h2> Bar Graph </h2>
            <li> Used for Categorical Data </li>
            <li> Bars do not touch </li>
            <li> Categorical variable is usually on the horizontal axis (x-axis) and frequency or relative frequency (proportion) is on the vertical axis (y-axis) </li>
            <li> Must label both axes and have a title </li>
            <li> A double bar graph or segmented bar graph can be used for bivariate categorical data </li>
          </div>

          <div className="pie-chart">
            <h2> Pie Chart </h2>
            <li> Used for Categorical Data </li>
            <li> Label each section, including the percentage, or include a key if there is not enough space to label on the graph </li>
            <li> Categorical variable is usually on the horizontal axis (x-axis) and frequency or relative frequency (proportion) is on the vertical axis (y-axis) </li>
            <li> Must label both axes and have a title </li>
            <li> A double bar graph or segmented bar graph can be used for bivariate categorical data </li>
          </div>

          <h3> For both categorical graphs, to describe a graph you must tell which data occured the most and which occured the least </h3>

        </div>

        <div className="numerical-graphs">

          <div className="dot-plot">
            <h2> Dot Plot </h2>
            <li> Used for Numerical Data  </li>
            <li> Made by putting dots (or Xs) on a number line </li>
            <li> Dots (or Xs) must be approximately the same size </li>
            <li> Put a title and label the x-axis (there is no y-axis) </li>
            <li> You can make comparative dotplots by using the same axis for multiple groups </li>
          </div>

          <div className="stemplots">
            <h2> Stemplots </h2>
            <li> Used for Univariate, Numerical Data </li>
            <li> You must have key so that we know how to read numbers </li>
            <li> You can split stems when you have long list of leaves </li>
            <li> Must label both axes and have a title </li>
            <li> You can make a comparative stemplot to compare two different groups </li>
          </div>

          <div className="Histograms">
            <h2> Hisograms </h2>
            <h3> Bars touch on histograms </h3>
            <h3> THere are two types of Histograms: Discrete and Continuous </h3>

              <div className="histo-d">
                <h2> Discrete Histograms </h2>
                <li> Bars are centered over discrete values </li>
              </div>

              <div className="histo-c">
                <h2> Continuous Histograms </h2>
                <li> Bars cover a class (interval) of values </li>
                <li> X-Axis is a range of numbers </li>
              </div>
          </div>

          <div className="box">
            <h2> Boxplots </h2>
            <li> Used of Numerical Data </li>
            <li> They are easy to make, display outliers, and construction is not subjective </li>
            <li> Boxplots cannot be described as Normal, Uniform, or Bimodal, but they can be symmetrical </li>
            <li> Useful for comparative displays </li>
            <li> First Quartile (Q1) - 25th Percentile; Median - 50th Percentile; Third Quartile (Q3) - 75th Percentile; Interquartile Range (IQR) - Q3-Q1; Lower Fence: Q1 - 1.5(IQR); Upper Fence: Q3 + 1.5(IQR) </li>
            <li> Any data points outside the fences are considered outliers </li>
          </div>

          <h3> For Numerical Graphs, there is a specific format you must follow </h3>

          <div className="SOCS">
            
            <li> S - Shape: Discuss the shape of the distribution </li>
            <li> O - Outliers: Outliers are values that are away from the rest of the data; If there is no outlier make sure you state that! </li>
            <li> C - Center: Describe the mean or median of the data (only need one of them) </li>
            <li> S - Spread: Describe the spread of the data (Range, IQR, or Standard Deviation) </li>
            <li> +Context: You must reference the specific problem situation (What does the data represent?); Can be inside any of the other descriptions </li>

          </div>

          <div className="distribution">
            <h2> Types of Distributions for Numerical Graphs (Shape) </h2>
            <li> Symmetrical - Refers to data  in which both sides are approximately the same when the graph is folded vertically down the middle </li>
            <li> Normal (Bell-shaped) - A special type of symmetrical curve; A very important distribution that occurs often in the real world </li>
            <li> Uniform - Rectangular Shaped; A special type of symmetrical curve; Refers to data in which every value/interval has approximately equal frequency </li>
            <li> Skewed Left (Negative Skew) - Refers to data in which one side (tail) is longer than the other side; The direction of skew is on the left side or the longer tail; The mean is pulled to the left</li>
            <li> Skewed Right (Positive Skew) - Refers to data in which one side (tail) is longer than the other side; The direction of skew is on the right side or the longer tail; The mean is pulled to the right </li>
            <li> Bimodal - Distribution with two distinct maximums; Usually caused by two distinctly different averages within the same population </li>
          </div>

        </div>

        <div className="variability">
          <h2> Measures of Variablility </h2>
          <li> Variability - How spread out the data is </li>
          <li> Range </li>
          <li> Interquartile Range (IQR) </li>
          <li> Standard Deviation - Average distance from the mean; Non-resistant; s for sample or σ for population </li>
          <li> Variance - s^2  for a sample or σ^2  for a population; Non-resistant; Formula is s^2 = (∑(x-X̅)^2)/n-1 </li>
        </div>

        <div className="td">
          <h2> Transformations and Combinations </h2>
          <li> Transformations (Addition) - When adding a constant to a random variable, the mean changes but not the standard deviation; Formula μ = a + bμ </li>
          <li> Transformations (Multiplication) - When multiplying a constant by a random variable, the mean and the standard deviation changes; Formula σ = bσ </li>
          <li> Combinations - To find the mean for the sum (or difference), add (or subtract) the two means; To find the standard deviation of the sum (or differences),  ALWAYS add the variances, then take the square root. Formula: μ = μa ± μb σ = sqrt(σa^2 + σb^2) </li>
        </div>

        <div className="z-score">
          <h2> Z-Scores </h2>
          <li> Z-Scores give a standard score; The number of standard deviations x is away from the mean </li>
          <li> Formula z=(x-μ)/σ </li>
        </div>

        <div className="normal">
          <h2> Normal Distribution Properties </h2>
          <li> As the standard deviations get added/subtracted from the mean, the percentile changes </li>
          <li> Approximately 68% of the observations are within 1σ of μ </li>
          <li> Approximately 95% of the observations are within 2σ of μ </li>
          <li> Approximately 99.7% of the observations are within 3σ of μ </li>
          <li> Percentile - the percent of the population that is less than (or equal to) that value </li> 
        </div>

        <div className="ogive">
          <h2> Ogives </h2>
            <li> Ogives - Add the previous data onto the current data until the last section has 100% of the data in it </li>
            <li> Shows Percentile of specific data points </li>
            <li> Uses Relative Cumulative Frequency, which keeps adding the data points until it reaches 100% </li>
        </div>

    </div>
    </>
  );
}

export default U1;