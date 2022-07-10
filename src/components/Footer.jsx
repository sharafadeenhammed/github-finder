function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <div className="footer">
      Copyright &copy; {footerYear} All Right Reserved. {/*&#49;*/}
    </div>
  )
}

export default Footer