"use client";
import Input from "@/components/ui/Input";
import NotificationModal from "@/components/sections/NotificationModal";
import React, { useState } from "react";

const RegisterLon25 = () => {
  // Participant Information
  const [participantName, setParticipantName] = useState("");
  const [participantDob, setParticipantDob] = useState("");
  const [gender, setGender] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [nationality, setNationality] = useState("");

  // Contact Information
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  // Travel Preferences
  const [roomType, setRoomType] = useState("");
  const [bonfire, setBonfire] = useState("");
  const [airportPick, setAirportPick] = useState("");

  // Business/Networking Details
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [otherPurpose, setOtherPurpose] = useState("");

  // Payment Details
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deposit, setDeposit] = useState("");
  const [balanceDue, setBalanceDue] = useState("");

  // Declaration
  const [signature, setSignature] = useState<File | null>(null);
  const [declarationDate, setDeclarationDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    type: "success" as "success" | "error",
    message: "",
  });

  // Handle file input
  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSignature(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("participantName", participantName);
    formData.append("participantDob", participantDob);
    formData.append("gender", gender);
    formData.append("passportNo", passportNo);
    formData.append("expiryDate", expiryDate);
    formData.append("nationality", nationality);
    formData.append("contactEmail", contactEmail);
    formData.append("contactNumber", contactNumber);
    formData.append("contactAddress", contactAddress);
    formData.append("roomType", roomType);
    formData.append("bonfire", bonfire);
    formData.append("airportPick", airportPick);
    formData.append("companyName", companyName);
    formData.append("industry", industry);
    formData.append("purpose", purpose === "other" ? otherPurpose : purpose);
    formData.append("paymentMethod", paymentMethod);
    formData.append("deposit", deposit);
    formData.append("balanceDue", balanceDue);
    formData.append("declarationDate", declarationDate);
    if (signature) {
      formData.append("signature", signature);
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setNotification({
          open: true,
          type: "success",
          message: "Registration submitted successfully!",
        });
        // Optionally reset form fields here
        setParticipantName("");
        setParticipantDob("");
        setGender("");
        setPassportNo("");
        setExpiryDate("");
        setNationality("");
        setContactEmail("");
        setCompanyName("");
        setContactAddress("");
        setRoomType("");
        setBonfire("");
        setAirportPick("");
        setCompanyName("");
        setIndustry("");
        setPurpose("");
        setPaymentMethod("");
        setDeposit("");
        setBalanceDue("");
        setDeclarationDate("");
        setSignature(null);
      } else {
        setNotification({
          open: true,
          type: "error",
          message: "Failed to submit registration. Please try again.",
        });
      }
    } catch (error) {
      setNotification({
        open: true,
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-baskervville bg-[#D2E1E3] shadow-lg p-6 text-[#2B1F09]">
      {/* Notification Modal */}
      <NotificationModal
        open={notification.open}
        onClose={() => setNotification({ ...notification, open: false })}
        type={notification.type}
        message={notification.message}
      />
      {/* Header */}
      <header className="text-center mb-8 text-[#2B1F09]">
        <div className="flex flex-row items-center justify-center gap-2 mb-6">
          <div className="flex flex-row items-center justify-center pr-4">
            <img
              className="w-40 rounded-full"
              src="/bsb-logo.jpg"
              alt="BSB LOGO"
            />
            <img
              className="w-40 -ml-6"
              src="/ODL/ODL-1.png"
              alt="online-dynamics-logo"
            />
          </div>
          <img
            className="w-80"
            src="/ODL/ODL-3.png"
            alt="online-dynamics-text"
          />
        </div>
        <div className="font-bold">
          <h2 className="text-3xl">
            Come To London - Business Supporting Business Travel Experience
          </h2>
          <p className="text-3xl mb-2">
            November 3 - 10, 2025 | London, United Kingdom
          </p>
          <h3 className="font-baskervvilleSC font-bold text-6xl">
            Registration Form
          </h3>
        </div>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Participant Information */}
        <section>
          <h2 className="font-baskervvilleSC font-bold lg:text-4xl">
            Participant Information
          </h2>
          <div className="text-2xl text-[#2B1F09]">
            <Input
              id="participant-name"
              label="Name"
              type="text"
              placeholder="Enter your full name"
              required={true}
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <div className="flex flex-row items-center justify-between gap-8">
              <Input
                id="participant-dob"
                label="Date of Birth"
                type="date"
                required={true}
                value={participantDob}
                onChange={(e) => setParticipantDob(e.target.value)}
                className="flex flex-row bg-[#C9C3B6]  my-2 w-full"
                labelClassName="px-4 py-4"
                inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
              />
              <Input
                id="gender"
                label="Gender"
                type="radio"
                required={true}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                className="flex flex-row bg-[#C9C3B6]  my-2 w-full"
                labelClassName="px-4 py-4"
                inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-8">
              <Input
                id="passport-no"
                label="Passport No."
                type="text"
                required={true}
                value={passportNo}
                onChange={(e) => setPassportNo(e.target.value)}
                className="flex flex-row bg-[#C9C3B6]  my-2 basis-2/3"
                labelClassName="px-4 py-4"
                inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
              />
              <Input
                id="expiry-date"
                label="Expiry Date"
                type="date"
                required={true}
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="flex flex-row bg-[#C9C3B6]  my-2 w-full basis-1/3"
                labelClassName="px-4 py-4"
                inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
              />
            </div>
            <Input
              id="nationality"
              label="Nationality"
              type="text"
              required={true}
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="flex flex-row bg-[#C9C3B6]  my-2"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="font-baskervvilleSC font-bold lg:text-4xl">
            Contact Information
          </h2>
          <div className="text-xl flex flex-col justify-between">
            <Input
              id="contact-email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              required={true}
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="flex flex-row bg-[#C9C3B6]  my-2"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="contact-number"
              label="Phone No. (Whatsapp)"
              type="number"
              placeholder="Enter your Whatsapp Line"
              required={true}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2"
              labelClassName="px-4 py-4 w-2xs"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="contact-address"
              label="Address"
              type="text"
              placeholder="Enter your address"
              required={true}
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              className="flex flex-row bg-[#C9C3B6]  my-2"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
          </div>
        </section>

        {/* Travel Preferences */}
        <section>
          <h2 className="font-baskervvilleSC font-bold lg:text-4xl">
            Travel Preferences
          </h2>
          <div className="text-xl flex flex-row justify-between">
            <Input
              id="room-type"
              label="Room Type"
              type="radio"
              required={true}
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              options={[
                { label: "Single", value: "single" },
                { label: "Double/Twin", value: "double" },
                { label: "Shared", value: "shared" },
              ]}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="bonfire"
              label="Bonfire Night"
              type="radio"
              required={true}
              value={bonfire}
              onChange={(e) => setBonfire(e.target.value)}
              options={[
                { label: "Alexandra", value: "alexandra" },
                { label: "Thames", value: "thames" },
              ]}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="airport-pick"
              label="Airport Pickup"
              type="radio"
              required={true}
              value={airportPick}
              onChange={(e) => setAirportPick(e.target.value)}
              options={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
          </div>
        </section>

        {/* Business/Networking Details */}
        <section>
          <h2 className="font-baskervvilleSC font-bold lg:text-4xl">
            Business/Networking Details
          </h2>
          <div className="text-xl flex flex-col justify-between">
            <Input
              id="company-name"
              label="Company Name"
              type="text"
              required={true}
              placeholder="Enter your company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="industry"
              label="Industry"
              type="text"
              required={true}
              placeholder="Enter your industry type"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="purpose"
              label="WTM Purpose"
              type="radio"
              required={true}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              options={[
                { label: "Tourism", value: "tourism" },
                { label: "Networking", value: "networking" },
                { label: "Education", value: "education" },
                { label: "Other", value: "other" },
              ]}
              showOtherInput={true}
              otherValue={otherPurpose}
              onOtherChange={(e) => setOtherPurpose(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
          </div>
        </section>

        {/* Payment Details */}
        <section>
          <h2 className="font-baskervvilleSC font-bold lg:text-4xl">
            Payment Details
          </h2>
          <div className="text-xl flex flex-col gap-4">
            <Input
              id="payment-method"
              label="Payment Method"
              type="radio"
              required={true}
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              options={[
                { label: "Bank", value: "bank" },
                { label: "Card", value: "card" },
                { label: "Other", value: "other" },
              ]}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4w-full"
            />
            <Input
              id="deposit"
              label="Deposit (₦ or €)"
              type="text"
              placeholder="Enter deposit amount"
              required={true}
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="balance-due"
              label="Balance Due"
              type="text"
              placeholder="Enter balance due"
              required={true}
              value={balanceDue}
              onChange={(e) => setBalanceDue(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2 px-4"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
          </div>
        </section>

        {/* Declaration */}
        <section>
          <h2 className="font-baskervvilleSC font-bold lg:text-4xl">
            Declaration
          </h2>
          <p className="text-2xl">
            I confirm my interest in participating in the{" "}
            <span className="font-bold italic">
              "Come to London - Business Supporting Business Travel Experience"
            </span>
            , and I agree to abide by the{" "}
            <span className="font-bold">Terms</span> and{" "}
            <span className="font-bold">Conditions</span> provided by{" "}
            <span className="font-bold">ONLINE DYNAMICS LIMITED.</span>
          </p>
          <div className="text-xl flex flex-row items-center justify-between gap-4">
            <Input
              id="signature"
              label="Signature"
              type="file"
              required={true}
              onChange={handleSignatureChange}
              className="flex flex-row bg-[#C9C3B6] my-2 basis-2/3"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full"
            />
            <Input
              id="date"
              label="Date"
              type="date"
              required={true}
              value={declarationDate}
              onChange={(e) => setDeclarationDate(e.target.value)}
              className="flex flex-row bg-[#C9C3B6] my-2 basis-1/3"
              labelClassName="px-4 py-4"
              inputClassName="outline-none border-s-2 border-[#2B1F09] px-4 py-4 w-full "
            />
          </div>
        </section>
        <button
          type="submit"
          className="mt-[86px] px-5 py-3 font-baskervvilleSC font-bold bg-[#061517] text-[#F7EBD5] text-2xl leading-7 -tracking-tight hover:bg-[#91671D] hover:text-[#061517] transition "
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegisterLon25;
