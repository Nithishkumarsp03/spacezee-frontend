import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../hooks/useNavigateToDirectory";
import styles from "./DAProfessionalDetails.module.css";
import image from "./assets/step-six-graphics.svg";

// Function to normalize and compare text
const normalizeText = (text) => {
  return text.replace(/\s+/g, "").toLowerCase();
};

const DAProfessionalDetails = () => {
  const { questions } = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const onSubmit = (data) => {
    // Normalize form data for comparison
    const normalizedOccupation = normalizeText(data.occupation);
    const normalizedOccupationType = normalizeText(data.occupation_Type);
    const normalizedSourceOfIncome = normalizeText(data.source_Of_Income);
    const normalizedGrossAnnualIncome = normalizeText(
      data.gross_Annual_Income_AccountHolder
    );
    const normalizedCompanyName = normalizeText(
      data.company_Organisation_AccountHolder || ""
    );

    // Normalize data from questions for comparison
    const normalizedDbOccupation = normalizeText(questions.Occupation);
    const normalizedDbOccupationType = normalizeText(questions.Occupation_Type);
    const normalizedDbSourceOfIncome = normalizeText(
      questions.Source_of_Income
    );
    const normalizedDbGrossAnnualIncome = normalizeText(
      questions.Gross_Annual_Income
    );
    const normalizedDbCompanyName = normalizeText(
      questions.Company_Organisation_Name
    );

    // Validate all inputs
    const isValid =
      normalizedOccupation === normalizedDbOccupation &&
      normalizedOccupationType === normalizedDbOccupationType &&
      normalizedSourceOfIncome === normalizedDbSourceOfIncome &&
      Number(normalizedGrossAnnualIncome.replace(/[^0-9]/g, "")) ===
        Number(normalizedDbGrossAnnualIncome.replace(/[^0-9]/g, "")) &&
      normalizedCompanyName === normalizedDbCompanyName;

    if (isValid) {
      navigate("terms-and-conditions"); // Adjust this to your actual next step
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check your inputs and try again.",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Six Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Professional Details!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label>
                      Occupation <em>*</em>
                    </label>
                    <select
                      aria-label="Select"
                      {...register("occupation", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Student">Student</option>
                      <option value="Retired">Retired</option>
                      <option value="Sole Proprietorship">
                        Sole Proprietorship
                      </option>
                      <option value="Partnership/Company">
                        Partnership/Company
                      </option>
                      <option value="Self Employed Professional">
                        Self Employed Professional
                      </option>
                      <option value="Home Maker">Home Maker</option>
                    </select>
                    {errors.occupation && (
                      <span className="text-danger">
                        Occupation is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Occupation Type <em>*</em>
                    </label>
                    <select
                      aria-label="Select"
                      {...register("occupation_Type", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Healthcare and Medical Occupations">
                        Healthcare and Medical Occupations
                      </option>
                      <option value="Information Technology (IT)">
                        Information Technology (IT)
                      </option>
                      <option value="Business">Business</option>
                      <option value="Finance">Finance</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Education">Education</option>
                      <option value="Skilled Trades">Skilled Trades</option>
                      <option value="Management and Administration">
                        Management and Administration
                      </option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Social Services">Social Services</option>
                      <option value="Manufacturing and Production">
                        Manufacturing and Production
                      </option>
                      <option value="Sole Proprietorship">
                        Sole Proprietorship
                      </option>
                      <option value="Agriculture and Farming">
                        Agriculture and Farming
                      </option>
                      <option value="Media and Communications">
                        Media and Communications
                      </option>
                      <option value="Arts and Entertainment">
                        Arts and Entertainment
                      </option>
                      <option value="Public Services/Government Jobs">
                        Public Services/Government Jobs
                      </option>
                      <option value="Contract/Freelance/Gig Work">
                        Contract/Freelance/Gig Work
                      </option>
                      <option value="Daily Wage">Daily Wage</option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.occupation_Type && (
                      <span className="text-danger">
                        Occupation Type is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Source of Income <em>*</em>
                    </label>
                    <select
                      aria-label="Select"
                      {...register("source_Of_Income", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Business">Business</option>
                      <option value="Salary">Salary</option>
                      <option value="Savings">Savings</option>
                      <option value="Family Wealth">Family Wealth</option>
                      <option value="Professional Fees">
                        Professional Fees
                      </option>
                      <option value="Investment">Investment</option>
                      <option value="Wages">Wages</option>
                    </select>
                    {errors.source_Of_Income && (
                      <span className="text-danger">
                        Source of Income is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Gross Annual Income <em>*</em>
                    </label>
                    <input
                      name="gross_Annual_Income_AccountHolder"
                      type="text"
                      placeholder="Enter Annual Income"
                      maxLength="15"
                      autoComplete="off"
                      {...register("gross_Annual_Income_AccountHolder", {
                        required: true,
                      })}
                    />
                    {errors.gross_Annual_Income_AccountHolder && (
                      <span className="text-danger">
                        Gross Annual Income is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>Company/Organisation Name</label>
                    <input
                      name="company_Organisation_AccountHolder"
                      type="text"
                      placeholder="Enter Company/Organisation"
                      maxLength="35"
                      autoComplete="off"
                      {...register("company_Organisation_AccountHolder")}
                    />
                  </div>
                  <button type="submit">Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAProfessionalDetails;
